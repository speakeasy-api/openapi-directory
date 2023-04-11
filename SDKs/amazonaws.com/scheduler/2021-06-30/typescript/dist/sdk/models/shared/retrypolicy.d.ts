import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A <code>RetryPolicy</code> object that includes information about the retry policy settings, including the maximum age of an event, and the maximum number of times EventBridge Scheduler will try to deliver the event to a target.
 */
export declare class RetryPolicy extends SpeakeasyBase {
    maximumEventAgeInSeconds?: number;
    maximumRetryAttempts?: number;
}
