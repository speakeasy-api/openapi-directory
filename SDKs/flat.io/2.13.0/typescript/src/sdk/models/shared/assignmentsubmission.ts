import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MediaAttachment } from "./mediaattachment";
import { GoogleClassroomSubmission } from "./googleclassroomsubmission";
import { MicrosoftGraphSubmission } from "./microsoftgraphsubmission";
import { AssignmentSubmissionStateEnum } from "./assignmentsubmissionstateenum";



// AssignmentSubmission
/** 
 * Assignment Submission
**/
export class AssignmentSubmission extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assignment" })
  assignment?: string;

  @SpeakeasyMetadata({ data: "json, name=attachments", elemType: MediaAttachment })
  attachments?: MediaAttachment[];

  @SpeakeasyMetadata({ data: "json, name=classroom" })
  classroom?: string;

  @SpeakeasyMetadata({ data: "json, name=creationDate" })
  creationDate?: string;

  @SpeakeasyMetadata({ data: "json, name=creator" })
  creator?: string;

  @SpeakeasyMetadata({ data: "json, name=draftGrade" })
  draftGrade?: number;

  @SpeakeasyMetadata({ data: "json, name=googleClassroom" })
  googleClassroom?: GoogleClassroomSubmission;

  @SpeakeasyMetadata({ data: "json, name=grade" })
  grade?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=maxPoints" })
  maxPoints?: number;

  @SpeakeasyMetadata({ data: "json, name=microsoftGraph" })
  microsoftGraph?: MicrosoftGraphSubmission;

  @SpeakeasyMetadata({ data: "json, name=returnCreator" })
  returnCreator?: string;

  @SpeakeasyMetadata({ data: "json, name=returnDate" })
  returnDate?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: AssignmentSubmissionStateEnum;

  @SpeakeasyMetadata({ data: "json, name=submissionDate" })
  submissionDate?: string;
}
