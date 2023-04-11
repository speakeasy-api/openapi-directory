import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p/>
 */
export declare class DescribeEventSubscriptionsMessage extends SpeakeasyBase {
    marker?: string;
    maxRecords?: number;
    subscriptionName?: string;
    tagKeys?: string[];
    tagValues?: string[];
}
