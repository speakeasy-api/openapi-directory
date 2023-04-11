import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Type of terminal action: Uninstall an Android certificate.
 */
export declare enum UninstallAndroidCertificateDetailsTypeEnum {
    UninstallAndroidCertificate = "UninstallAndroidCertificate"
}
/**
 * Information about the action to take.
 */
export declare class UninstallAndroidCertificateDetails extends SpeakeasyBase {
    /**
     * The unique identifier of the certificate to be uninstalled.
     */
    certificateId?: string;
    /**
     * Type of terminal action: Uninstall an Android certificate.
     */
    type?: UninstallAndroidCertificateDetailsTypeEnum;
}
