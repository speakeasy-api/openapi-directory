import { SpeakeasyBase } from "../../../internal/utils";
import { TagList } from "./taglist";
/**
 * Represents the input to <a>AddTagsToResource</a>.
 */
export declare class AddTagsToResourceMessage extends SpeakeasyBase {
    resourceName: string;
    tags: TagList[];
}
