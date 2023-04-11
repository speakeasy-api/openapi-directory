import { SpeakeasyBase } from "../../../internal/utils";
import { LicenseConversionTask } from "./licenseconversiontask";
/**
 * Success
 */
export declare class ListLicenseConversionTasksResponse extends SpeakeasyBase {
    licenseConversionTasks?: LicenseConversionTask[];
    nextToken?: string;
}
