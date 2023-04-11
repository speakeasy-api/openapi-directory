import { SpeakeasyBase } from "../../../internal/utils";
import { LicenseOperationFailure } from "./licenseoperationfailure";
/**
 * Success
 */
export declare class ListFailuresForLicenseConfigurationOperationsResponse extends SpeakeasyBase {
    licenseOperationFailureList?: LicenseOperationFailure[];
    nextToken?: string;
}
