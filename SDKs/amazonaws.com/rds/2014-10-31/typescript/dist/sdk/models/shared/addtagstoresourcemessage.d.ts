import { SpeakeasyBase } from "../../../internal/utils";
import { TagList } from "./taglist";
/**
 * <p/>
 */
export declare class AddTagsToResourceMessage extends SpeakeasyBase {
    resourceName: string;
    tags: TagList[];
}
