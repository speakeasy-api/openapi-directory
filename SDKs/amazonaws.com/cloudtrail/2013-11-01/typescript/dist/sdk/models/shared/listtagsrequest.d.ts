import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies a list of tags to return.
 */
export declare class ListTagsRequest extends SpeakeasyBase {
    nextToken?: string;
    resourceIdList: string[];
}
