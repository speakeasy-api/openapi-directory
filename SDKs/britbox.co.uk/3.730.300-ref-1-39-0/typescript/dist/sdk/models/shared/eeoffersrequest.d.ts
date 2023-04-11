import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Data for getting the eligible offers.
 */
export declare class EeOffersRequest extends SpeakeasyBase {
    /**
     * EE API authorization Token received from GET /ee/token/create.
     */
    accessToken: string;
    /**
     * The msisdn.
     */
    msisdn: string;
    /**
     * trackingHeader.
     */
    trackingHeader?: string;
}
