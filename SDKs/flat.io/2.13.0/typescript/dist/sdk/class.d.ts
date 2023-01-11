import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Class {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * activateClass - Activate the class
     *
     * Mark the class as `active`. This is mainly used for classes synchronized from Clever that are initially with an `inactive` state and hidden in the UI.
     *
    **/
    activateClass(req: operations.ActivateClassRequest, config?: AxiosRequestConfig): Promise<operations.ActivateClassResponse>;
    /**
     * addClassUser - Add a user to the class
     *
     * This method can be used by a teacher of the class to enroll another Flat user into the class.
     *
     * Only users that are part of your Organization can be enrolled in a class of this same Organization.
     *
     * When enrolling a user in the class, Flat will automatically add this user to the corresponding Class group, based on this role in the Organization.
     *
    **/
    addClassUser(req: operations.AddClassUserRequest, config?: AxiosRequestConfig): Promise<operations.AddClassUserResponse>;
    /**
     * archiveAssignment - Archive the assignment
     *
     * Archive the assignment
     *
    **/
    archiveAssignment(req: operations.ArchiveAssignmentRequest, config?: AxiosRequestConfig): Promise<operations.ArchiveAssignmentResponse>;
    /**
     * archiveClass - Archive the class
     *
     * Mark the class as `archived`. When this course is synchronized with another app, like Google Classroom, this state will be automatically be updated.
     *
    **/
    archiveClass(req: operations.ArchiveClassRequest, config?: AxiosRequestConfig): Promise<operations.ArchiveClassResponse>;
    /**
     * copyAssignment - Copy an assignment
     *
     * Copy an assignment to a specified class.
     *
     * If the original assignment has a due date in the past, this new assingment will be created without a due date.
     *
     * If the new class is synchronized with an external app (e.g. Google Classroom), the copied assignment will also be posted on the external app.
     *
    **/
    copyAssignment(req: operations.CopyAssignmentRequest, config?: AxiosRequestConfig): Promise<operations.CopyAssignmentResponse>;
    /**
     * createAssignment - Assignment creation
     *
     * Use this method as a teacher to create and post a new assignment to a class.
     *
     * If the class is synchronized with Google Classroom, the assignment will be automatically posted to your Classroom course.
     *
    **/
    createAssignment(req: operations.CreateAssignmentRequest, config?: AxiosRequestConfig): Promise<operations.CreateAssignmentResponse>;
    /**
     * createClass - Create a new class
     *
     * Classrooms on Flat allow you to create activities with assignments and post content to a specific group.
     *
     * When creating a class, Flat automatically creates two groups: one for the teachers of the course, one for the students. The creator of this class is automatically added to the teachers group.
     *
     * If the classsroom is synchronized with another application like Google Classroom, some of the meta information will automatically be updated.
     *
     * You can add users to this class using `PUT /classes/{class}/users/{user}`, they will automatically added to the group based on their role on Flat. Users can also enroll themselves to this class using `POST /classes/enroll/{enrollmentCode}` and the `enrollmentCode` returned in the `ClassDetails` response.
     *
    **/
    createClass(req: operations.CreateClassRequest, config?: AxiosRequestConfig): Promise<operations.CreateClassResponse>;
    /**
     * createSubmission - Create or edit a submission
     *
     * Use this method as a student to create, update and submit a submission related to an assignment.
     * Students can only set `attachments` and `submit`.
     * Teachers can use `PUT /classes/{class}/assignments/{assignment}/submissions/{submission}` to update a submission by id.
     *
    **/
    createSubmission(req: operations.CreateSubmissionRequest, config?: AxiosRequestConfig): Promise<operations.CreateSubmissionResponse>;
    /**
     * deleteClassUser - Remove a user from the class
     *
     * This method can be used by a teacher to remove a user from the class, or by a student to leave the classroom.
     *
     * Warning: Removing a user from the class will remove the associated resources, including the submissions and feedback related to these submissions.
     *
    **/
    deleteClassUser(req: operations.DeleteClassUserRequest, config?: AxiosRequestConfig): Promise<operations.DeleteClassUserResponse>;
    /**
     * deleteSubmission - Delete a submission
     *
     * Use this method as a teacher to delete a submission and allow student to start over the assignment
     *
    **/
    deleteSubmission(req: operations.DeleteSubmissionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSubmissionResponse>;
    /**
     * deleteSubmissionComment - Delete a feedback comment to a submission
    **/
    deleteSubmissionComment(req: operations.DeleteSubmissionCommentRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSubmissionCommentResponse>;
    /**
     * editSubmission - Edit a submission
     *
     * Use this method as a teacher to update the different submission and give feedback.
     * Teachers can only set `return`, `draftGrade` and `grade`
     *
    **/
    editSubmission(req: operations.EditSubmissionRequest, config?: AxiosRequestConfig): Promise<operations.EditSubmissionResponse>;
    /**
     * enrollClass - Join a class
     *
     * Use this method to join a class using an enrollment code given one of the teacher of this class. This code is also available in the `ClassDetails` returned to the teachers when creating the class or listing / fetching a specific class.
     *
     * Flat will automatically add the user to the corresponding class group based on this role in the organization.
     *
    **/
    enrollClass(req: operations.EnrollClassRequest, config?: AxiosRequestConfig): Promise<operations.EnrollClassResponse>;
    /**
     * exportSubmissionsReviewsAsCsv - CSV Grades exports
     *
     * Export list of submissions grades to a CSV file
    **/
    exportSubmissionsReviewsAsCsv(req: operations.ExportSubmissionsReviewsAsCsvRequest, config?: AxiosRequestConfig): Promise<operations.ExportSubmissionsReviewsAsCsvResponse>;
    /**
     * exportSubmissionsReviewsAsExcel - Excel Grades exports
     *
     * Export list of submissions grades to an Excel file
    **/
    exportSubmissionsReviewsAsExcel(req: operations.ExportSubmissionsReviewsAsExcelRequest, config?: AxiosRequestConfig): Promise<operations.ExportSubmissionsReviewsAsExcelResponse>;
    /**
     * forkScore - Fork a score
     *
     * This API call will make a copy of the last revision of the specified score and create a new score. The copy of the score will have a privacy set to `private`.
     *
     * When using a [Flat for Education](https://flat.io/edu) account, the inline and contextualized comments will be accessible in the child document.
     *
    **/
    forkScore(req: operations.ForkScoreRequest, config?: AxiosRequestConfig): Promise<operations.ForkScoreResponse>;
    /**
     * getClass - Get the details of a single class
    **/
    getClass(req: operations.GetClassRequest, config?: AxiosRequestConfig): Promise<operations.GetClassResponse>;
    /**
     * getScoreSubmissions - List submissions related to the score
     *
     * This API call will list the different assignments submissions where the score is attached. This method can be used by anyone that are part of the organization and have at least read access to the document.
     *
    **/
    getScoreSubmissions(req: operations.GetScoreSubmissionsRequest, config?: AxiosRequestConfig): Promise<operations.GetScoreSubmissionsResponse>;
    /**
     * getSubmission - Get a student submission
    **/
    getSubmission(req: operations.GetSubmissionRequest, config?: AxiosRequestConfig): Promise<operations.GetSubmissionResponse>;
    /**
     * getSubmissionComments - List the feedback comments of a submission
    **/
    getSubmissionComments(req: operations.GetSubmissionCommentsRequest, config?: AxiosRequestConfig): Promise<operations.GetSubmissionCommentsResponse>;
    /**
     * getSubmissionHistory - Get the history of the submission
     *
     * For teachers only. Returns a detailed history of the submission. This currently includes state and grade histories.
     *
    **/
    getSubmissionHistory(req: operations.GetSubmissionHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetSubmissionHistoryResponse>;
    /**
     * getSubmissions - List the students' submissions
    **/
    getSubmissions(req: operations.GetSubmissionsRequest, config?: AxiosRequestConfig): Promise<operations.GetSubmissionsResponse>;
    /**
     * listAssignments - Assignments listing
    **/
    listAssignments(req: operations.ListAssignmentsRequest, config?: AxiosRequestConfig): Promise<operations.ListAssignmentsResponse>;
    /**
     * listClassStudentSubmissions - List the submissions for a student
     *
     * Use this method as a teacher to list all the assignment submissions sent by a student of the class
     *
    **/
    listClassStudentSubmissions(req: operations.ListClassStudentSubmissionsRequest, config?: AxiosRequestConfig): Promise<operations.ListClassStudentSubmissionsResponse>;
    /**
     * listClasses - List the classes available for the current user
    **/
    listClasses(req: operations.ListClassesRequest, config?: AxiosRequestConfig): Promise<operations.ListClassesResponse>;
    /**
     * postSubmissionComment - Add a feedback comment to a submission
    **/
    postSubmissionComment(req: operations.PostSubmissionCommentRequest, config?: AxiosRequestConfig): Promise<operations.PostSubmissionCommentResponse>;
    /**
     * unarchiveAssignment - Unarchive the assignment.
     *
     * Mark the assignment as `active`.
     *
    **/
    unarchiveAssignment(req: operations.UnarchiveAssignmentRequest, config?: AxiosRequestConfig): Promise<operations.UnarchiveAssignmentResponse>;
    /**
     * unarchiveClass - Unarchive the class
     *
     * Mark the class as `active`. When this course is synchronized with another app, like Google Classroom, this state will be automatically be updated.
     *
    **/
    unarchiveClass(req: operations.UnarchiveClassRequest, config?: AxiosRequestConfig): Promise<operations.UnarchiveClassResponse>;
    /**
     * updateClass - Update the class
     *
     * Update the meta information of the class
     *
    **/
    updateClass(req: operations.UpdateClassRequest, config?: AxiosRequestConfig): Promise<operations.UpdateClassResponse>;
    /**
     * updateSubmissionComment - Update a feedback comment to a submission
    **/
    updateSubmissionComment(req: operations.UpdateSubmissionCommentRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSubmissionCommentResponse>;
}
