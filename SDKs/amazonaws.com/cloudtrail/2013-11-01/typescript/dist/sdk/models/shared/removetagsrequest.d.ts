import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
/**
 * Specifies the tags to remove from a trail, event data store, or channel.
 */
export declare class RemoveTagsRequest extends SpeakeasyBase {
    resourceId: string;
    tagsList: Tag[];
}
