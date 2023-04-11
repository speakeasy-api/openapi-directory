import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Details of an assign request.
 */
export declare class ItvAssignMsisdnRequest extends SpeakeasyBase {
    /**
     * Product id from /ee/offers
     */
    eeProductId: string;
    /**
     * The validated msisdn.
     */
    msisdn: string;
    /**
     * The ITV profile token
     */
    profileToken: string;
    /**
     * trackingHeader
     */
    trackingHeader: string;
}
