import { SpeakeasyBase } from "../../../internal/utils";
import { ExtendedProducerResponsibility } from "./extendedproducerresponsibility";
/**
 * A type that defines the Extended Producer Responsibility policy.
 */
export declare class ExtendedProducerResponsibilityPolicy extends SpeakeasyBase {
    /**
     * The unique identifier for the category under which the policy applies.
     */
    categoryId?: string;
    /**
     * The unique identifier for the category tree under which the policy applies.
     */
    categoryTreeId?: string;
    /**
     * The details regarding the attributes included in the policy, such as their usage guidelines and whether they can be specified at the listing variation level.
     */
    supportedAttributes?: ExtendedProducerResponsibility[];
}
