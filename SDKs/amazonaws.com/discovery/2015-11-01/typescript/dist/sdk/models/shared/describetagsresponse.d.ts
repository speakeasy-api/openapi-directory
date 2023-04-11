import { SpeakeasyBase } from "../../../internal/utils";
import { ConfigurationTag } from "./configurationtag";
/**
 * Success
 */
export declare class DescribeTagsResponse extends SpeakeasyBase {
    nextToken?: string;
    tags?: ConfigurationTag[];
}
