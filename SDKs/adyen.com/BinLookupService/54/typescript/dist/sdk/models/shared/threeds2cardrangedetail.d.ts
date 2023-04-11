import { SpeakeasyBase } from "../../../internal/utils";
export declare class ThreeDs2CardRangeDetail extends SpeakeasyBase {
    /**
     * Provides additional information to the 3DS Server.
     *
     * @remarks
     * Possible values:
     * - 01 (Authentication is available at ACS)
     * - 02 (Attempts supported by ACS or DS)
     * - 03 (Decoupled authentication supported)
     * - 04 (Whitelisting supported)
     */
    acsInfoInd?: string[];
    /**
     * Card brand.
     */
    brandCode?: string;
    /**
     * BIN end range.
     */
    endRange?: string;
    /**
     * BIN start range.
     */
    startRange?: string;
    /**
     * Supported 3D Secure protocol versions
     */
    threeDs2Versions?: string[];
    /**
     * In a 3D Secure 2 browser-based flow, this is the URL where you should send the device fingerprint to.
     */
    threeDSMethodURL?: string;
}
