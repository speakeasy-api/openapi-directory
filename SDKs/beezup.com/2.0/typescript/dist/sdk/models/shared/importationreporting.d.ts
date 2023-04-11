import { SpeakeasyBase } from "../../../internal/utils";
import { BeezUPCommonUserErrorMessage } from "./beezupcommonusererrormessage";
import { ImportationReportingLinks } from "./importationreportinglinks";
/**
 * The catalog importation reporting
 */
export declare class ImportationReporting extends SpeakeasyBase {
    /**
     * Indicate if this importation is an auto import or not.
     */
    autoImported?: boolean;
    /**
     * Indicate the begin UTC date of this importation.
     */
    beginUtcDate: Date;
    /**
     * Indicate the end UTC date of this importation.
     */
    endUtcDate?: Date;
    /**
     * Indicate the error message list related to this importation.
     */
    errors?: BeezUPCommonUserErrorMessage[];
    /**
     * The execution identifier of the catalog importation
     */
    executionId: string;
    /**
     * Indicate the input url of this importation.
     */
    inputConfigurationUrl?: string;
    /**
     * Indicate the last update UTC date of the reporting.
     */
    lastUpdateUtcDate: Date;
    links?: ImportationReportingLinks;
    /**
     * The last step name of the importation process
     */
    stepName?: string;
    /**
     * Indicate the steps that have been passed during the importation process
     */
    steps: Record<string, boolean>;
    /**
     * Indicate if the importation succeed or not.
     */
    success?: boolean;
    /**
     * Indicate the total product count detected in the catalog during the importation.
     */
    totalProductCount?: number;
    /**
     * Indicate the total product count in error detected in the catalog during the importation.
     */
    totalProductErrorCount?: number;
    /**
     * Indicate the total product count in success in the catalog during the importation.
     */
    totalProductSuccessCount?: number;
    /**
     * The user identifier
     */
    userId?: string;
}
