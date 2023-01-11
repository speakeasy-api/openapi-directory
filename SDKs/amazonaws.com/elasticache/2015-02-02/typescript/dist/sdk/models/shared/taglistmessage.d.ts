import { SpeakeasyBase } from "../../../internal/utils";
import { TagList } from "./taglist";
/**
 * Represents the output from the <code>AddTagsToResource</code>, <code>ListTagsForResource</code>, and <code>RemoveTagsFromResource</code> operations.
**/
export declare class TagListMessage extends SpeakeasyBase {
    tagList?: TagList[];
}
