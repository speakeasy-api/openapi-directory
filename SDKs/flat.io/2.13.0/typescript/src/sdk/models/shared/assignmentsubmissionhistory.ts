import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AssignmentSubmissionStateEnum } from "./assignmentsubmissionstateenum";



export class AssignmentSubmissionHistoryAttachment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=revision" })
  revision?: string;

  @SpeakeasyMetadata({ data: "json, name=score" })
  score?: string;
}


// AssignmentSubmissionHistory
/** 
 * History item of the submission
**/
export class AssignmentSubmissionHistory extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attachment" })
  attachment?: AssignmentSubmissionHistoryAttachment;

  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: Date;

  @SpeakeasyMetadata({ data: "json, name=draftGrade" })
  draftGrade?: number;

  @SpeakeasyMetadata({ data: "json, name=grade" })
  grade?: number;

  @SpeakeasyMetadata({ data: "json, name=maxPoints" })
  maxPoints?: number;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: AssignmentSubmissionStateEnum;

  @SpeakeasyMetadata({ data: "json, name=users" })
  users?: string[];
}
