import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Type of second factor authentication
 */
export declare enum MfaSetupStatusMfaTypeEnum {
    Totp = "TOTP",
    Emergency = "EMERGENCY",
    U2F = "U2F"
}
/**
 * Contains the save-to-send-out information of a MFA-setup
 */
export declare class MfaSetupStatus extends SpeakeasyBase {
    /**
     * Creation date
     */
    createdAt: Date;
    /**
     * ID
     */
    id: number;
    /**
     * Type of second factor authentication
     */
    mfaType: MfaSetupStatusMfaTypeEnum;
    /**
     * A name to identify the MFA setup by the user. Default is MFA-type followed by a number
     */
    name: string;
}
