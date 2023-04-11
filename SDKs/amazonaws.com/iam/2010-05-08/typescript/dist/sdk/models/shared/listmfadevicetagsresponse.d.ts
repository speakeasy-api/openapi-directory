import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
/**
 * Success
 */
export declare class ListMFADeviceTagsResponse extends SpeakeasyBase {
    isTruncated?: boolean;
    marker?: string;
    tags: Tag[];
}
