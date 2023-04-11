import { SpeakeasyBase } from "../../../internal/utils";
import { AllowedOrigin } from "./allowedorigin";
/**
 * OK - the request has succeeded.
 */
export declare class AllowedOriginsResponse extends SpeakeasyBase {
    /**
     * List of allowed origins.
     */
    data?: AllowedOrigin[];
}
