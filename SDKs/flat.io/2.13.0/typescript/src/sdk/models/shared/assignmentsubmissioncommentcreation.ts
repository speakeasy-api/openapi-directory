import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AssignmentSubmissionCommentCreation
/** 
 * Creation of a assignment submission comment
**/
export class AssignmentSubmissionCommentCreation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=comment" })
  comment: string;
}
