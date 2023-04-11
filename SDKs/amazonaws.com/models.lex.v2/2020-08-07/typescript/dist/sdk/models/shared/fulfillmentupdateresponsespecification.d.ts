import { SpeakeasyBase } from "../../../internal/utils";
import { MessageGroup } from "./messagegroup";
/**
 * Provides settings for a message that is sent periodically to the user while a fulfillment Lambda function is running.
 */
export declare class FulfillmentUpdateResponseSpecification extends SpeakeasyBase {
    allowInterrupt?: boolean;
    frequencyInSeconds: number;
    messageGroups: MessageGroup[];
}
