import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Class:
    _client: requests.Session
    _security_client: requests.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests.Session, security_client: requests.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version

    
    def activate_class(self, request: operations.ActivateClassRequest) -> operations.ActivateClassResponse:
        r"""Activate the class
        Mark the class as `active`. This is mainly used for classes synchronized from Clever that are initially with an `inactive` state and hidden in the UI.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/classes/{class}/activate", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ActivateClassResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ClassDetails])
                res.class_details = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FlatErrorResponse])
                res.flat_error_response = out

        return res

    
    def add_class_user(self, request: operations.AddClassUserRequest) -> operations.AddClassUserResponse:
        r"""Add a user to the class
        This method can be used by a teacher of the class to enroll another Flat user into the class.
        
        Only users that are part of your Organization can be enrolled in a class of this same Organization.
        
        When enrolling a user in the class, Flat will automatically add this user to the corresponding Class group, based on this role in the Organization.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/classes/{class}/users/{user}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AddClassUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FlatErrorResponse])
                res.flat_error_response = out

        return res

    
    def archive_assignment(self, request: operations.ArchiveAssignmentRequest) -> operations.ArchiveAssignmentResponse:
        r"""Archive the assignment
        Archive the assignment
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/classes/{class}/assignments/{assignment}/archive", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ArchiveAssignmentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Assignment])
                res.assignment = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FlatErrorResponse])
                res.flat_error_response = out

        return res

    
    def archive_class(self, request: operations.ArchiveClassRequest) -> operations.ArchiveClassResponse:
        r"""Archive the class
        Mark the class as `archived`. When this course is synchronized with another app, like Google Classroom, this state will be automatically be updated.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/classes/{class}/archive", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ArchiveClassResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ClassDetails])
                res.class_details = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FlatErrorResponse])
                res.flat_error_response = out

        return res

    
    def copy_assignment(self, request: operations.CopyAssignmentRequest) -> operations.CopyAssignmentResponse:
        r"""Copy an assignment
        Copy an assignment to a specified class.
        
        If the original assignment has a due date in the past, this new assingment will be created without a due date.
        
        If the new class is synchronized with an external app (e.g. Google Classroom), the copied assignment will also be posted on the external app.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/classes/{class}/assignments/{assignment}/copy", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CopyAssignmentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Assignment])
                res.assignment = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FlatErrorResponse])
                res.flat_error_response = out

        return res

    
    def create_assignment(self, request: operations.CreateAssignmentRequest) -> operations.CreateAssignmentResponse:
        r"""Assignment creation
        Use this method as a teacher to create and post a new assignment to a class.
        
        If the class is synchronized with Google Classroom, the assignment will be automatically posted to your Classroom course.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/classes/{class}/assignments", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateAssignmentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Assignment])
                res.assignment = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FlatErrorResponse])
                res.flat_error_response = out

        return res

    
    def create_class(self, request: operations.CreateClassRequest) -> operations.CreateClassResponse:
        r"""Create a new class
        Classrooms on Flat allow you to create activities with assignments and post content to a specific group.
        
        When creating a class, Flat automatically creates two groups: one for the teachers of the course, one for the students. The creator of this class is automatically added to the teachers group.
        
        If the classsroom is synchronized with another application like Google Classroom, some of the meta information will automatically be updated.
        
        You can add users to this class using `PUT /classes/{class}/users/{user}`, they will automatically added to the group based on their role on Flat. Users can also enroll themselves to this class using `POST /classes/enroll/{enrollmentCode}` and the `enrollmentCode` returned in the `ClassDetails` response.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/classes"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateClassResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ClassDetails])
                res.class_details = out
        elif r.status_code == 402:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FlatErrorResponse])
                res.flat_error_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FlatErrorResponse])
                res.flat_error_response = out

        return res

    
    def create_submission(self, request: operations.CreateSubmissionRequest) -> operations.CreateSubmissionResponse:
        r"""Create or edit a submission
        Use this method as a student to create, update and submit a submission related to an assignment.
        Students can only set `attachments` and `submit`.
        Teachers can use `PUT /classes/{class}/assignments/{assignment}/submissions/{submission}` to update a submission by id.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/classes/{class}/assignments/{assignment}/submissions", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateSubmissionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AssignmentSubmission])
                res.assignment_submission = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FlatErrorResponse])
                res.flat_error_response = out

        return res

    
    def delete_class_user(self, request: operations.DeleteClassUserRequest) -> operations.DeleteClassUserResponse:
        r"""Remove a user from the class
        This method can be used by a teacher to remove a user from the class, or by a student to leave the classroom.
        
        Warning: Removing a user from the class will remove the associated resources, including the submissions and feedback related to these submissions.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/classes/{class}/users/{user}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteClassUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FlatErrorResponse])
                res.flat_error_response = out

        return res

    
    def delete_submission(self, request: operations.DeleteSubmissionRequest) -> operations.DeleteSubmissionResponse:
        r"""Delete a submission
        Use this method as a teacher to delete a submission and allow student to start over the assignment
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/classes/{class}/assignments/{assignment}/submissions/{submission}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSubmissionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FlatErrorResponse])
                res.flat_error_response = out

        return res

    
    def delete_submission_comment(self, request: operations.DeleteSubmissionCommentRequest) -> operations.DeleteSubmissionCommentResponse:
        r"""Delete a feedback comment to a submission
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/classes/{class}/assignments/{assignment}/submissions/{submission}/comments/{comment}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSubmissionCommentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FlatErrorResponse])
                res.flat_error_response = out

        return res

    
    def edit_submission(self, request: operations.EditSubmissionRequest) -> operations.EditSubmissionResponse:
        r"""Edit a submission
        Use this method as a teacher to update the different submission and give feedback.
        Teachers can only set `return`, `draftGrade` and `grade`
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/classes/{class}/assignments/{assignment}/submissions/{submission}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EditSubmissionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AssignmentSubmission])
                res.assignment_submission = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FlatErrorResponse])
                res.flat_error_response = out

        return res

    
    def enroll_class(self, request: operations.EnrollClassRequest) -> operations.EnrollClassResponse:
        r"""Join a class
        Use this method to join a class using an enrollment code given one of the teacher of this class. This code is also available in the `ClassDetails` returned to the teachers when creating the class or listing / fetching a specific class.
        
        Flat will automatically add the user to the corresponding class group based on this role in the organization.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/classes/enroll/{enrollmentCode}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.EnrollClassResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ClassDetails])
                res.class_details = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FlatErrorResponse])
                res.flat_error_response = out

        return res

    
    def export_submissions_reviews_as_csv(self, request: operations.ExportSubmissionsReviewsAsCsvRequest) -> operations.ExportSubmissionsReviewsAsCsvResponse:
        r"""CSV Grades exports
        Export list of submissions grades to a CSV file
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/classes/{class}/assignments/{assignment}/submissions/csv", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ExportSubmissionsReviewsAsCsvResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "text/csv"):
                res.export_submissions_reviews_as_csv_200_text_csv_binary_string = r.content
        else:
            if utils.match_content_type(content_type, "text/csv"):
                res.body = r.content

        return res

    
    def export_submissions_reviews_as_excel(self, request: operations.ExportSubmissionsReviewsAsExcelRequest) -> operations.ExportSubmissionsReviewsAsExcelResponse:
        r"""Excel Grades exports
        Export list of submissions grades to an Excel file
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/classes/{class}/assignments/{assignment}/submissions/excel", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ExportSubmissionsReviewsAsExcelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"):
                res.export_submissions_reviews_as_excel_200_application_vnd_openxmlformats_officedocument_spreadsheetml_sheet_binary_string = r.content
        else:
            if utils.match_content_type(content_type, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"):
                res.body = r.content

        return res

    
    def fork_score(self, request: operations.ForkScoreRequest) -> operations.ForkScoreResponse:
        r"""Fork a score
        This API call will make a copy of the last revision of the specified score and create a new score. The copy of the score will have a privacy set to `private`.
        
        When using a [Flat for Education](https://flat.io/edu) account, the inline and contextualized comments will be accessible in the child document.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/scores/{score}/fork", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ForkScoreResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScoreDetails])
                res.score_details = out
        elif r.status_code == 402:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FlatErrorResponse])
                res.flat_error_response = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FlatErrorResponse])
                res.flat_error_response = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FlatErrorResponse])
                res.flat_error_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FlatErrorResponse])
                res.flat_error_response = out

        return res

    
    def get_class(self, request: operations.GetClassRequest) -> operations.GetClassResponse:
        r"""Get the details of a single class
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/classes/{class}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetClassResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ClassDetails])
                res.class_details = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FlatErrorResponse])
                res.flat_error_response = out

        return res

    
    def get_score_submissions(self, request: operations.GetScoreSubmissionsRequest) -> operations.GetScoreSubmissionsResponse:
        r"""List submissions related to the score
        This API call will list the different assignments submissions where the score is attached. This method can be used by anyone that are part of the organization and have at least read access to the document.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/scores/{score}/submissions", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetScoreSubmissionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.AssignmentSubmission]])
                res.assignment_submissions = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FlatErrorResponse])
                res.flat_error_response = out

        return res

    
    def get_submission(self, request: operations.GetSubmissionRequest) -> operations.GetSubmissionResponse:
        r"""Get a student submission
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/classes/{class}/assignments/{assignment}/submissions/{submission}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSubmissionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AssignmentSubmission])
                res.assignment_submission = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FlatErrorResponse])
                res.flat_error_response = out

        return res

    
    def get_submission_comments(self, request: operations.GetSubmissionCommentsRequest) -> operations.GetSubmissionCommentsResponse:
        r"""List the feedback comments of a submission
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/classes/{class}/assignments/{assignment}/submissions/{submission}/comments", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSubmissionCommentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.AssignmentSubmissionComment]])
                res.assignment_submission_comments = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FlatErrorResponse])
                res.flat_error_response = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FlatErrorResponse])
                res.flat_error_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FlatErrorResponse])
                res.flat_error_response = out

        return res

    
    def get_submission_history(self, request: operations.GetSubmissionHistoryRequest) -> operations.GetSubmissionHistoryResponse:
        r"""Get the history of the submission
        For teachers only. Returns a detailed history of the submission. This currently includes state and grade histories.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/classes/{class}/assignments/{assignment}/submissions/{submission}/history", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSubmissionHistoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.AssignmentSubmissionHistory]])
                res.assignment_submission_histories = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FlatErrorResponse])
                res.flat_error_response = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FlatErrorResponse])
                res.flat_error_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FlatErrorResponse])
                res.flat_error_response = out

        return res

    
    def get_submissions(self, request: operations.GetSubmissionsRequest) -> operations.GetSubmissionsResponse:
        r"""List the students' submissions
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/classes/{class}/assignments/{assignment}/submissions", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSubmissionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.AssignmentSubmission]])
                res.assignment_submissions = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FlatErrorResponse])
                res.flat_error_response = out

        return res

    
    def list_assignments(self, request: operations.ListAssignmentsRequest) -> operations.ListAssignmentsResponse:
        r"""Assignments listing
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/classes/{class}/assignments", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ListAssignmentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.Assignment]])
                res.assignments = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FlatErrorResponse])
                res.flat_error_response = out

        return res

    
    def list_class_student_submissions(self, request: operations.ListClassStudentSubmissionsRequest) -> operations.ListClassStudentSubmissionsResponse:
        r"""List the submissions for a student
        Use this method as a teacher to list all the assignment submissions sent by a student of the class
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/classes/{class}/students/{user}/submissions", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ListClassStudentSubmissionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.AssignmentSubmission]])
                res.assignment_submissions = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FlatErrorResponse])
                res.flat_error_response = out

        return res

    
    def list_classes(self, request: operations.ListClassesRequest) -> operations.ListClassesResponse:
        r"""List the classes available for the current user
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/classes"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListClassesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.ClassDetails]])
                res.class_details = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FlatErrorResponse])
                res.flat_error_response = out

        return res

    
    def post_submission_comment(self, request: operations.PostSubmissionCommentRequest) -> operations.PostSubmissionCommentResponse:
        r"""Add a feedback comment to a submission
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/classes/{class}/assignments/{assignment}/submissions/{submission}/comments", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSubmissionCommentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AssignmentSubmissionComment])
                res.assignment_submission_comment = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FlatErrorResponse])
                res.flat_error_response = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FlatErrorResponse])
                res.flat_error_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FlatErrorResponse])
                res.flat_error_response = out

        return res

    
    def unarchive_assignment(self, request: operations.UnarchiveAssignmentRequest) -> operations.UnarchiveAssignmentResponse:
        r"""Unarchive the assignment.
        Mark the assignment as `active`.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/classes/{class}/assignments/{assignment}/archive", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UnarchiveAssignmentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Assignment])
                res.assignment = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FlatErrorResponse])
                res.flat_error_response = out

        return res

    
    def unarchive_class(self, request: operations.UnarchiveClassRequest) -> operations.UnarchiveClassResponse:
        r"""Unarchive the class
        Mark the class as `active`. When this course is synchronized with another app, like Google Classroom, this state will be automatically be updated.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/classes/{class}/archive", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UnarchiveClassResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ClassDetails])
                res.class_details = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FlatErrorResponse])
                res.flat_error_response = out

        return res

    
    def update_class(self, request: operations.UpdateClassRequest) -> operations.UpdateClassResponse:
        r"""Update the class
        Update the meta information of the class
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/classes/{class}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateClassResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ClassDetails])
                res.class_details = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FlatErrorResponse])
                res.flat_error_response = out

        return res

    
    def update_submission_comment(self, request: operations.UpdateSubmissionCommentRequest) -> operations.UpdateSubmissionCommentResponse:
        r"""Update a feedback comment to a submission
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/classes/{class}/assignments/{assignment}/submissions/{submission}/comments/{comment}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateSubmissionCommentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AssignmentSubmissionComment])
                res.assignment_submission_comment = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FlatErrorResponse])
                res.flat_error_response = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FlatErrorResponse])
                res.flat_error_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FlatErrorResponse])
                res.flat_error_response = out

        return res

    