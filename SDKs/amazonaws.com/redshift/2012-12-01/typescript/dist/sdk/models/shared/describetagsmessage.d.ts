import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p/>
 */
export declare class DescribeTagsMessage extends SpeakeasyBase {
    marker?: string;
    maxRecords?: number;
    resourceName?: string;
    resourceType?: string;
    tagKeys?: string[];
    tagValues?: string[];
}
