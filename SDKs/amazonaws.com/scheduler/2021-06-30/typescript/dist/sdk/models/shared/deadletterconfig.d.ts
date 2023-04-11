import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An object that contains information about an Amazon SQS queue that EventBridge Scheduler uses as a dead-letter queue for your schedule. If specified, EventBridge Scheduler delivers failed events that could not be successfully delivered to a target to the queue.
 */
export declare class DeadLetterConfig extends SpeakeasyBase {
    arn?: string;
}
