import { SpeakeasyBase } from "../../../internal/utils";
import { BundleRegistrationEntity } from "./bundleregistrationentity";
/**
 * Download method (file or full_zip)
 */
export declare enum BundleDownloadEntityDownloadMethodEnum {
    File = "file",
    FullZip = "full_zip"
}
/**
 * List Bundle Downloads
 */
export declare class BundleDownloadEntity extends SpeakeasyBase {
    /**
     * List Bundle Registrations
     */
    bundleRegistration?: BundleRegistrationEntity;
    /**
     * Download date/time
     */
    createdAt?: Date;
    /**
     * Download method (file or full_zip)
     */
    downloadMethod?: BundleDownloadEntityDownloadMethodEnum;
    /**
     * Download path
     */
    path?: string;
}
