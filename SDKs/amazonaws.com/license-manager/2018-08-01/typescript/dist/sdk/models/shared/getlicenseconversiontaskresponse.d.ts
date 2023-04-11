import { SpeakeasyBase } from "../../../internal/utils";
import { LicenseConversionContext } from "./licenseconversioncontext";
import { LicenseConversionTaskStatusEnum } from "./licenseconversiontaskstatusenum";
/**
 * Success
 */
export declare class GetLicenseConversionTaskResponse extends SpeakeasyBase {
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
