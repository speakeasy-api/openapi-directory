import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Data for validating PIN.
 */
export declare class EeValidatePinRequest extends SpeakeasyBase {
    /**
     * EE API authorization Token received from GET /ee/token/create.
     */
    accessToken: string;
    /**
     * The pin entered by a user. 6 digits
     */
    pin: string;
    /**
     * The pinReference.
     */
    pinReference: string;
    /**
     * Tracking header to be able to search logs for a specific user requests. If not provided it will be generated. FE should store it for later user.
     */
    trackingHeader?: string;
}
