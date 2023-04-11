import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
/**
 * Specifies the tags to add to a trail, event data store, or channel.
 */
export declare class AddTagsRequest extends SpeakeasyBase {
    resourceId: string;
    tagsList: Tag[];
}
