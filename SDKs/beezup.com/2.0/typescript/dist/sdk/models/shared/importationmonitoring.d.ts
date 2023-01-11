import { SpeakeasyBase } from "../../../internal/utils";
import { BeezUpCommonUserErrorMessage } from "./beezupcommonusererrormessage";
import { ImportationMonitoringLinks } from "./importationmonitoringlinks";
/**
 * Describe the reporting of the catalog importation
**/
export declare class ImportationMonitoring extends SpeakeasyBase {
    beginUtcDate: Date;
    errors?: BeezUpCommonUserErrorMessage[];
    executionId: string;
    lastUpdateUtcDate: Date;
    links?: ImportationMonitoringLinks;
    steps: Record<string, boolean>;
    success: boolean;
    userId?: string;
}
