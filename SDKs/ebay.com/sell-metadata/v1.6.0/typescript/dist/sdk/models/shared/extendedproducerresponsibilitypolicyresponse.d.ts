import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
import { ExtendedProducerResponsibilityPolicy } from "./extendedproducerresponsibilitypolicy";
/**
 * A type that defines the response fields for the <b>getExtendedProducerResponsibilityPolicies</b> method.
 */
export declare class ExtendedProducerResponsibilityPolicyResponse extends SpeakeasyBase {
    /**
     * An array of response fields detailing the Extended Producer Responsibility policies supported for the specified marketplace.
     */
    extendedProducerResponsibilities?: ExtendedProducerResponsibilityPolicy[];
    /**
     * A collection of warnings generated for the request.
     */
    warnings?: ErrorT[];
}
