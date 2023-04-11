import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Data for creating the PIN request.
 */
export declare class EeCreatePinRequest extends SpeakeasyBase {
    /**
     * EE API authorization Token received from GET /ee/token/create.
     */
    accessToken: string;
    /**
     * The msisdn.
     */
    msisdn: string;
    /**
     * trackingHeader
     */
    trackingHeader?: string;
}
