import { SpeakeasyBase } from "../../../internal/utils";
import { TagList } from "./taglist";
/**
 * Represents the input of an AddTagsToResource operation.
 */
export declare class AddTagsToResourceMessage extends SpeakeasyBase {
    resourceName: string;
    tags: TagList[];
}
