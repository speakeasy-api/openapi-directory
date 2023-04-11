import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Success
 */
export declare class GetTagsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    returnSize: number;
    tags: string[];
    totalSize: number;
}
