import { SpeakeasyBase } from "../../../internal/utils";
import { LicenseConversionContext } from "./licenseconversioncontext";
import { LicenseConversionTaskStatusEnum } from "./licenseconversiontaskstatusenum";
/**
 * Information about a license type conversion task.
 */
export declare class LicenseConversionTask extends SpeakeasyBase {
    destinationLicenseContext?: LicenseConversionContext;
    endTime?: Date;
    licenseConversionTaskId?: string;
    licenseConversionTime?: Date;
    resourceArn?: string;
    sourceLicenseContext?: LicenseConversionContext;
    startTime?: Date;
    status?: LicenseConversionTaskStatusEnum;
    statusMessage?: string;
}
