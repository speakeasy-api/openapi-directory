import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ScoreCommentContext } from "./scorecommentcontext";



// ScoreCommentUpdate
/** 
 * Update of a comment
**/
export class ScoreCommentUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=comment" })
  comment?: string;

  @SpeakeasyMetadata({ data: "json, name=context" })
  context?: ScoreCommentContext;

  @SpeakeasyMetadata({ data: "json, name=rawComment" })
  rawComment?: string;

  @SpeakeasyMetadata({ data: "json, name=revision" })
  revision?: string;
}
