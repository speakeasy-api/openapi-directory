import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Flat for Education classes
 */
export declare class Class {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Activate the class
     *
     * @remarks
     * Mark the class as `active`. This is mainly used for classes synchronized from Clever that are initially with an `inactive` state and hidden in the UI.
     *
     */
    activateClass(req: operations.ActivateClassRequest, security: operations.ActivateClassSecurity, config?: AxiosRequestConfig): Promise<operations.ActivateClassResponse>;
    /**
     * Add a user to the class
     *
     * @remarks
     * This method can be used by a teacher of the class to enroll another Flat user into the class.
     *
     * Only users that are part of your Organization can be enrolled in a class of this same Organization.
     *
     * When enrolling a user in the class, Flat will automatically add this user to the corresponding Class group, based on this role in the Organization.
     *
     */
    addClassUser(req: operations.AddClassUserRequest, security: operations.AddClassUserSecurity, config?: AxiosRequestConfig): Promise<operations.AddClassUserResponse>;
    /**
     * Archive the assignment
     *
     * @remarks
     * Archive the assignment
     *
     */
    archiveAssignment(req: operations.ArchiveAssignmentRequest, security: operations.ArchiveAssignmentSecurity, config?: AxiosRequestConfig): Promise<operations.ArchiveAssignmentResponse>;
    /**
     * Archive the class
     *
     * @remarks
     * Mark the class as `archived`. When this course is synchronized with another app, like Google Classroom, this state will be automatically be updated.
     *
     */
    archiveClass(req: operations.ArchiveClassRequest, security: operations.ArchiveClassSecurity, config?: AxiosRequestConfig): Promise<operations.ArchiveClassResponse>;
    /**
     * Copy an assignment
     *
     * @remarks
     * Copy an assignment to a specified class.
     *
     * If the original assignment has a due date in the past, this new assingment will be created without a due date.
     *
     * If the new class is synchronized with an external app (e.g. Google Classroom), the copied assignment will also be posted on the external app.
     *
     */
    copyAssignment(req: operations.CopyAssignmentRequest, security: operations.CopyAssignmentSecurity, config?: AxiosRequestConfig): Promise<operations.CopyAssignmentResponse>;
    /**
     * Assignment creation
     *
     * @remarks
     * Use this method as a teacher to create and post a new assignment to a class.
     *
     * If the class is synchronized with Google Classroom, the assignment will be automatically posted to your Classroom course.
     *
     */
    createAssignment(req: operations.CreateAssignmentRequest, security: operations.CreateAssignmentSecurity, config?: AxiosRequestConfig): Promise<operations.CreateAssignmentResponse>;
    /**
     * Create a new class
     *
     * @remarks
     * Classrooms on Flat allow you to create activities with assignments and post content to a specific group.
     *
     * When creating a class, Flat automatically creates two groups: one for the teachers of the course, one for the students. The creator of this class is automatically added to the teachers group.
     *
     * If the classsroom is synchronized with another application like Google Classroom, some of the meta information will automatically be updated.
     *
     * You can add users to this class using `PUT /classes/{class}/users/{user}`, they will automatically added to the group based on their role on Flat. Users can also enroll themselves to this class using `POST /classes/enroll/{enrollmentCode}` and the `enrollmentCode` returned in the `ClassDetails` response.
     *
     */
    createClass(req: shared.ClassCreation, security: operations.CreateClassSecurity, config?: AxiosRequestConfig): Promise<operations.CreateClassResponse>;
    /**
     * Create or edit a submission
     *
     * @remarks
     * Use this method as a student to create, update and submit a submission related to an assignment.
     * Students can only set `attachments` and `submit`.
     * Teachers can use `PUT /classes/{class}/assignments/{assignment}/submissions/{submission}` to update a submission by id.
     *
     */
    createSubmission(req: operations.CreateSubmissionRequest, security: operations.CreateSubmissionSecurity, config?: AxiosRequestConfig): Promise<operations.CreateSubmissionResponse>;
    /**
     * Remove a user from the class
     *
     * @remarks
     * This method can be used by a teacher to remove a user from the class, or by a student to leave the classroom.
     *
     * Warning: Removing a user from the class will remove the associated resources, including the submissions and feedback related to these submissions.
     *
     */
    deleteClassUser(req: operations.DeleteClassUserRequest, security: operations.DeleteClassUserSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteClassUserResponse>;
    /**
     * Delete a submission
     *
     * @remarks
     * Use this method as a teacher to delete a submission and allow student to start over the assignment
     *
     */
    deleteSubmission(req: operations.DeleteSubmissionRequest, security: operations.DeleteSubmissionSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteSubmissionResponse>;
    /**
     * Delete a feedback comment to a submission
     */
    deleteSubmissionComment(req: operations.DeleteSubmissionCommentRequest, security: operations.DeleteSubmissionCommentSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteSubmissionCommentResponse>;
    /**
     * Edit a submission
     *
     * @remarks
     * Use this method as a teacher to update the different submission and give feedback.
     * Teachers can only set `return`, `draftGrade` and `grade`
     *
     */
    editSubmission(req: operations.EditSubmissionRequest, security: operations.EditSubmissionSecurity, config?: AxiosRequestConfig): Promise<operations.EditSubmissionResponse>;
    /**
     * Join a class
     *
     * @remarks
     * Use this method to join a class using an enrollment code given one of the teacher of this class. This code is also available in the `ClassDetails` returned to the teachers when creating the class or listing / fetching a specific class.
     *
     * Flat will automatically add the user to the corresponding class group based on this role in the organization.
     *
     */
    enrollClass(req: operations.EnrollClassRequest, security: operations.EnrollClassSecurity, config?: AxiosRequestConfig): Promise<operations.EnrollClassResponse>;
    /**
     * CSV Grades exports
     *
     * @remarks
     * Export list of submissions grades to a CSV file
     */
    exportSubmissionsReviewsAsCsv(req: operations.ExportSubmissionsReviewsAsCsvRequest, security: operations.ExportSubmissionsReviewsAsCsvSecurity, config?: AxiosRequestConfig): Promise<operations.ExportSubmissionsReviewsAsCsvResponse>;
    /**
     * Excel Grades exports
     *
     * @remarks
     * Export list of submissions grades to an Excel file
     */
    exportSubmissionsReviewsAsExcel(req: operations.ExportSubmissionsReviewsAsExcelRequest, security: operations.ExportSubmissionsReviewsAsExcelSecurity, config?: AxiosRequestConfig): Promise<operations.ExportSubmissionsReviewsAsExcelResponse>;
    /**
     * Fork a score
     *
     * @remarks
     * This API call will make a copy of the last revision of the specified score and create a new score. The copy of the score will have a privacy set to `private`.
     *
     * When using a [Flat for Education](https://flat.io/edu) account, the inline and contextualized comments will be accessible in the child document.
     *
     */
    forkScore(req: operations.ForkScoreRequest, security: operations.ForkScoreSecurity, config?: AxiosRequestConfig): Promise<operations.ForkScoreResponse>;
    /**
     * Get the details of a single class
     */
    getClass(req: operations.GetClassRequest, security: operations.GetClassSecurity, config?: AxiosRequestConfig): Promise<operations.GetClassResponse>;
    /**
     * List submissions related to the score
     *
     * @remarks
     * This API call will list the different assignments submissions where the score is attached. This method can be used by anyone that are part of the organization and have at least read access to the document.
     *
     */
    getScoreSubmissions(req: operations.GetScoreSubmissionsRequest, security: operations.GetScoreSubmissionsSecurity, config?: AxiosRequestConfig): Promise<operations.GetScoreSubmissionsResponse>;
    /**
     * Get a student submission
     */
    getSubmission(req: operations.GetSubmissionRequest, security: operations.GetSubmissionSecurity, config?: AxiosRequestConfig): Promise<operations.GetSubmissionResponse>;
    /**
     * List the feedback comments of a submission
     */
    getSubmissionComments(req: operations.GetSubmissionCommentsRequest, security: operations.GetSubmissionCommentsSecurity, config?: AxiosRequestConfig): Promise<operations.GetSubmissionCommentsResponse>;
    /**
     * Get the history of the submission
     *
     * @remarks
     * For teachers only. Returns a detailed history of the submission. This currently includes state and grade histories.
     *
     */
    getSubmissionHistory(req: operations.GetSubmissionHistoryRequest, security: operations.GetSubmissionHistorySecurity, config?: AxiosRequestConfig): Promise<operations.GetSubmissionHistoryResponse>;
    /**
     * List the students' submissions
     */
    getSubmissions(req: operations.GetSubmissionsRequest, security: operations.GetSubmissionsSecurity, config?: AxiosRequestConfig): Promise<operations.GetSubmissionsResponse>;
    /**
     * Assignments listing
     */
    listAssignments(req: operations.ListAssignmentsRequest, security: operations.ListAssignmentsSecurity, config?: AxiosRequestConfig): Promise<operations.ListAssignmentsResponse>;
    /**
     * List the submissions for a student
     *
     * @remarks
     * Use this method as a teacher to list all the assignment submissions sent by a student of the class
     *
     */
    listClassStudentSubmissions(req: operations.ListClassStudentSubmissionsRequest, security: operations.ListClassStudentSubmissionsSecurity, config?: AxiosRequestConfig): Promise<operations.ListClassStudentSubmissionsResponse>;
    /**
     * List the classes available for the current user
     */
    listClasses(req: operations.ListClassesRequest, security: operations.ListClassesSecurity, config?: AxiosRequestConfig): Promise<operations.ListClassesResponse>;
    /**
     * Add a feedback comment to a submission
     */
    postSubmissionComment(req: operations.PostSubmissionCommentRequest, security: operations.PostSubmissionCommentSecurity, config?: AxiosRequestConfig): Promise<operations.PostSubmissionCommentResponse>;
    /**
     * Unarchive the assignment.
     *
     * @remarks
     * Mark the assignment as `active`.
     *
     */
    unarchiveAssignment(req: operations.UnarchiveAssignmentRequest, security: operations.UnarchiveAssignmentSecurity, config?: AxiosRequestConfig): Promise<operations.UnarchiveAssignmentResponse>;
    /**
     * Unarchive the class
     *
     * @remarks
     * Mark the class as `active`. When this course is synchronized with another app, like Google Classroom, this state will be automatically be updated.
     *
     */
    unarchiveClass(req: operations.UnarchiveClassRequest, security: operations.UnarchiveClassSecurity, config?: AxiosRequestConfig): Promise<operations.UnarchiveClassResponse>;
    /**
     * Update the class
     *
     * @remarks
     * Update the meta information of the class
     *
     */
    updateClass(req: operations.UpdateClassRequest, security: operations.UpdateClassSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateClassResponse>;
    /**
     * Update a feedback comment to a submission
     */
    updateSubmissionComment(req: operations.UpdateSubmissionCommentRequest, security: operations.UpdateSubmissionCommentSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateSubmissionCommentResponse>;
}
