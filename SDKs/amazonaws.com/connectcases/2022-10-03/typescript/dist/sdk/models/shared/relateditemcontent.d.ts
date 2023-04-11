import { SpeakeasyBase } from "../../../internal/utils";
import { CommentContent } from "./commentcontent";
import { ContactContent } from "./contactcontent";
/**
 * Represents the content of a particular type of related item.
 */
export declare class RelatedItemContent extends SpeakeasyBase {
    comment?: CommentContent;
    contact?: ContactContent;
}
