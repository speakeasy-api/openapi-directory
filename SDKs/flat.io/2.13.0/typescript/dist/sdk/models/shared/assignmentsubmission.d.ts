import { SpeakeasyBase } from "../../../internal/utils";
import { MediaAttachment } from "./mediaattachment";
import { GoogleClassroomSubmission } from "./googleclassroomsubmission";
import { MicrosoftGraphSubmission } from "./microsoftgraphsubmission";
import { AssignmentSubmissionStateEnum } from "./assignmentsubmissionstateenum";
/**
 * Assignment Submission
**/
export declare class AssignmentSubmission extends SpeakeasyBase {
    assignment?: string;
    attachments?: MediaAttachment[];
    classroom?: string;
    creationDate?: string;
    creator?: string;
    draftGrade?: number;
    googleClassroom?: GoogleClassroomSubmission;
    grade?: number;
    id?: string;
    maxPoints?: number;
    microsoftGraph?: MicrosoftGraphSubmission;
    returnCreator?: string;
    returnDate?: string;
    state?: AssignmentSubmissionStateEnum;
    submissionDate?: string;
}
