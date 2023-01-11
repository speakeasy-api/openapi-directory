import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClassAttachmentCreation } from "./classattachmentcreation";



export class AssignmentSubmissionUpdateComments extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;

  @SpeakeasyMetadata({ data: "json, name=unread" })
  unread?: number;
}


// AssignmentSubmissionUpdate
/** 
 * Assignment Submission creation
**/
export class AssignmentSubmissionUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attachments", elemType: ClassAttachmentCreation })
  attachments?: ClassAttachmentCreation[];

  @SpeakeasyMetadata({ data: "json, name=comments" })
  comments?: AssignmentSubmissionUpdateComments;

  @SpeakeasyMetadata({ data: "json, name=draftGrade" })
  draftGrade?: number;

  @SpeakeasyMetadata({ data: "json, name=grade" })
  grade?: number;

  @SpeakeasyMetadata({ data: "json, name=return" })
  return?: boolean;

  @SpeakeasyMetadata({ data: "json, name=submit" })
  submit?: boolean;
}
