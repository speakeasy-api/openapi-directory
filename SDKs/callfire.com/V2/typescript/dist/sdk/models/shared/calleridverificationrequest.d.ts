import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request which is used to verify a new caller id number
 */
export declare class CallerIdVerificationRequest extends SpeakeasyBase {
    /**
     * The code used to verify a caller id number
     */
    verificationCode?: string;
}
