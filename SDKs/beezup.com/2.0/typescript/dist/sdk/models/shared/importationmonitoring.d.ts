import { SpeakeasyBase } from "../../../internal/utils";
import { BeezUPCommonUserErrorMessage } from "./beezupcommonusererrormessage";
import { ImportationMonitoringLinks } from "./importationmonitoringlinks";
/**
 * Describe the reporting of the catalog importation
 */
export declare class ImportationMonitoring extends SpeakeasyBase {
    /**
     * The start date of the importation
     */
    beginUtcDate: Date;
    /**
     * In case of error a description will be indicated
     */
    errors?: BeezUPCommonUserErrorMessage[];
    /**
     * The execution identifier of the catalog importation
     */
    executionId: string;
    /**
     * The last update of the reporting
     */
    lastUpdateUtcDate: Date;
    /**
     * Applicable operations considering the state of the importation
     */
    links?: ImportationMonitoringLinks;
    /**
     * Contains all steps of the importation process with a boolean. If true the step has been passed, false the step is not complete
     */
    steps: Record<string, boolean>;
    /**
     * Indicates if the importation was successfully completed or not
     */
    success: boolean;
    /**
     * The user identifier
     */
    userId?: string;
}
