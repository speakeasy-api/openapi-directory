import { SpeakeasyBase } from "../../../internal/utils";
import { FulfillmentUpdatesSpecification } from "./fulfillmentupdatesspecification";
import { PostFulfillmentStatusSpecification } from "./postfulfillmentstatusspecification";
/**
 * Determines if a Lambda function should be invoked for a specific intent.
 */
export declare class FulfillmentCodeHookSettings extends SpeakeasyBase {
    active?: boolean;
    enabled: boolean;
    fulfillmentUpdatesSpecification?: FulfillmentUpdatesSpecification;
    postFulfillmentStatusSpecification?: PostFulfillmentStatusSpecification;
}
