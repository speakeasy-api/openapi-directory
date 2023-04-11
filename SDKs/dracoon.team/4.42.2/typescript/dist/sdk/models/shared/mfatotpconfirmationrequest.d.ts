import { SpeakeasyBase } from "../../../internal/utils";
export declare class MfaTotpConfirmationRequest extends SpeakeasyBase {
    /**
     * ID
     */
    id: number;
    /**
     * Generated valid OTP
     */
    otp: string;
}
