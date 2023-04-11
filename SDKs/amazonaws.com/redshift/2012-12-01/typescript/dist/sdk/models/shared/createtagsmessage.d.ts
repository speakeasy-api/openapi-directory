import { SpeakeasyBase } from "../../../internal/utils";
import { TagList } from "./taglist";
/**
 * Contains the output from the <code>CreateTags</code> action.
 */
export declare class CreateTagsMessage extends SpeakeasyBase {
    resourceName: string;
    tags: TagList[];
}
