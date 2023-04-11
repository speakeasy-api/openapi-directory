import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Type of terminal action: Install an Android certificate.
 */
export declare enum InstallAndroidCertificateDetailsTypeEnum {
    InstallAndroidCertificate = "InstallAndroidCertificate"
}
/**
 * Information about the action to take.
 */
export declare class InstallAndroidCertificateDetails extends SpeakeasyBase {
    /**
     * The unique identifier of the certificate to be installed.
     */
    certificateId?: string;
    /**
     * Type of terminal action: Install an Android certificate.
     */
    type?: InstallAndroidCertificateDetailsTypeEnum;
}
