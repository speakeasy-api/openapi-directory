import { SpeakeasyBase } from "../../../internal/utils";
import { TagsModel } from "./tagsmodel";
/**
 * Success
 */
export declare class ListTagsForResourceResponse extends SpeakeasyBase {
    /**
     * Specifies the tags (keys and values) for an application, campaign, message template, or segment.
     */
    tagsModel: TagsModel;
}
