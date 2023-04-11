import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides a summary of the properties of an event tracker. For a complete listing, call the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeEventTracker.html">DescribeEventTracker</a> API.
 */
export declare class EventTrackerSummary extends SpeakeasyBase {
    creationDateTime?: Date;
    eventTrackerArn?: string;
    lastUpdatedDateTime?: Date;
    name?: string;
    status?: string;
}
