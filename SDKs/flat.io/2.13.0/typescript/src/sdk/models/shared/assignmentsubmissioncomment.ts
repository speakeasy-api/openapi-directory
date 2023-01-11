import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AssignmentSubmissionComment
/** 
 * Feedback comment added to an assignment submission
**/
export class AssignmentSubmissionComment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=comment" })
  comment?: string;

  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=modificationDate" })
  modificationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=submission" })
  submission?: string;

  @SpeakeasyMetadata({ data: "json, name=unread" })
  unread?: boolean;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user?: string;
}
