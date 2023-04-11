import { SpeakeasyBase } from "../../../internal/utils";
import { DSPublicKeyDetail } from "./dspublickeydetail";
import { ThreeDs2CardRangeDetail } from "./threeds2cardrangedetail";
/**
 * OK - the request has succeeded.
 */
export declare class ThreeDSAvailabilityResponse extends SpeakeasyBase {
    /**
     * List of Directory Server (DS) public keys.
     */
    dsPublicKeys?: DSPublicKeyDetail[];
    /**
     * Indicator if 3D Secure 1 is supported.
     */
    threeDs1Supported?: boolean;
    /**
     * List of brand and card range pairs.
     */
    threeDs2CardRangeDetails?: ThreeDs2CardRangeDetail[];
    /**
     * Indicator if 3D Secure 2 is supported.
     */
    threeDs2supported?: boolean;
}
