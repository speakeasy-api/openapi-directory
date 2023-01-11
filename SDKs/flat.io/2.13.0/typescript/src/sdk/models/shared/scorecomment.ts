import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ScoreCommentContext } from "./scorecommentcontext";


export enum ScoreCommentTypeEnum {
    Document = "document",
    Inline = "inline"
}


// ScoreComment
/** 
 * Comment added on a sheet music
**/
export class ScoreComment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=comment" })
  comment?: string;

  @SpeakeasyMetadata({ data: "json, name=context" })
  context?: ScoreCommentContext;

  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=mentions" })
  mentions?: string[];

  @SpeakeasyMetadata({ data: "json, name=modificationDate" })
  modificationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=rawComment" })
  rawComment?: string;

  @SpeakeasyMetadata({ data: "json, name=replyTo" })
  replyTo?: string;

  @SpeakeasyMetadata({ data: "json, name=resolved" })
  resolved?: boolean;

  @SpeakeasyMetadata({ data: "json, name=resolvedBy" })
  resolvedBy?: string;

  @SpeakeasyMetadata({ data: "json, name=revision" })
  revision?: string;

  @SpeakeasyMetadata({ data: "json, name=score" })
  score?: string;

  @SpeakeasyMetadata({ data: "json, name=spam" })
  spam?: boolean;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: ScoreCommentTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user?: string;
}
