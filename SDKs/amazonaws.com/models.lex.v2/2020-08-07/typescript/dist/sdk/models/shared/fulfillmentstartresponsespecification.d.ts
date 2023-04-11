import { SpeakeasyBase } from "../../../internal/utils";
import { MessageGroup } from "./messagegroup";
/**
 * Provides settings for a message that is sent to the user when a fulfillment Lambda function starts running.
 */
export declare class FulfillmentStartResponseSpecification extends SpeakeasyBase {
    allowInterrupt?: boolean;
    delayInSeconds: number;
    messageGroups: MessageGroup[];
}
