import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ScoreCommentContext } from "./scorecommentcontext";



// ScoreCommentCreation
/** 
 * Creation of a comment
**/
export class ScoreCommentCreation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=comment" })
  comment: string;

  @SpeakeasyMetadata({ data: "json, name=context" })
  context?: ScoreCommentContext;

  @SpeakeasyMetadata({ data: "json, name=mentions" })
  mentions?: string[];

  @SpeakeasyMetadata({ data: "json, name=rawComment" })
  rawComment?: string;

  @SpeakeasyMetadata({ data: "json, name=replyTo" })
  replyTo?: string;

  @SpeakeasyMetadata({ data: "json, name=revision" })
  revision?: string;
}
