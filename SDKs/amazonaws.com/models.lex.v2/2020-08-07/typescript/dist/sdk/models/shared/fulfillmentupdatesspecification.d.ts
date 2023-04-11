import { SpeakeasyBase } from "../../../internal/utils";
import { FulfillmentStartResponseSpecification } from "./fulfillmentstartresponsespecification";
import { FulfillmentUpdateResponseSpecification } from "./fulfillmentupdateresponsespecification";
/**
 * Provides information for updating the user on the progress of fulfilling an intent.
 */
export declare class FulfillmentUpdatesSpecification extends SpeakeasyBase {
    active: boolean;
    startResponse?: FulfillmentStartResponseSpecification;
    timeoutInSeconds?: number;
    updateResponse?: FulfillmentUpdateResponseSpecification;
}
