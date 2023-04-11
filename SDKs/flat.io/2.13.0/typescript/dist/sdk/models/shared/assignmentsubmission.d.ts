import { SpeakeasyBase } from "../../../internal/utils";
import { AssignmentSubmissionStateEnum } from "./assignmentsubmissionstateenum";
import { GoogleClassroomSubmission } from "./googleclassroomsubmission";
import { MediaAttachment } from "./mediaattachment";
import { MicrosoftGraphSubmission } from "./microsoftgraphsubmission";
/**
 * Assignment Submission
 */
export declare class AssignmentSubmission extends SpeakeasyBase {
    /**
     * Unique identifier of the assignment
     */
    assignment?: string;
    attachments?: MediaAttachment[];
    /**
     * Unique identifier of the classroom where the assignment was posted
     *
     * @remarks
     *
     */
    classroom?: string;
    /**
     * The date when the submission was created
     */
    creationDate?: string;
    /**
     * The User identifier of the student who created the submission
     */
    creator?: string;
    /**
     * Optional grade. If unset, no grade was set. This value is only visible by the teacher, and we will be set to `grade` once the teacher returns the submission
     */
    draftGrade?: number;
    /**
     * A coursework submission on Google Classroom
     */
    googleClassroom?: GoogleClassroomSubmission;
    /**
     * Optional grade. If unset, no grade was set.
     */
    grade?: number;
    /**
     * Unique identifier of the submission
     */
    id?: string;
    /**
     * Optional max points for the grade. If set, a corresponding `draftGrade` or `grade` will be set.
     */
    maxPoints?: number;
    /**
     * A Microsoft Teams submission
     */
    microsoftGraph?: MicrosoftGraphSubmission;
    /**
     * The User unique identifier of the teacher who returned the submission
     *
     * @remarks
     *
     */
    returnCreator?: string;
    /**
     * The date when the teacher returned the work
     */
    returnDate?: string;
    /**
     * State of the submission
     */
    state?: AssignmentSubmissionStateEnum;
    /**
     * The date when the student submitted his work
     */
    submissionDate?: string;
}
