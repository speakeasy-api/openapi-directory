import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains QR code URL and OTP URI for TOTP setup
 */
export declare class TotpSetupResponse extends SpeakeasyBase {
    /**
     * ID
     */
    id: number;
    /**
     * URI containing secret key, issuer and account information
     */
    otpUri: string;
    /**
     * TOTP data URL (QR Code)
     */
    qrCode: string;
    /**
     * Secret key used for setup of TOTP authentication
     */
    secret: string;
}
