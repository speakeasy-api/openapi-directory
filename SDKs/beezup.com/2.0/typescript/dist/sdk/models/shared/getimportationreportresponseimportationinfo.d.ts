import { SpeakeasyBase } from "../../../internal/utils";
import { InputFileConfiguration } from "./inputfileconfiguration";
export declare class GetImportationReportResponseImportationInfo extends SpeakeasyBase {
    /**
     * The start date of the importation
     */
    beginUtcDate: Date;
    /**
     * The start date of the importation
     */
    endUtcDate: Date;
    /**
     * Describe how to get and read a file
     */
    inputConfiguration: InputFileConfiguration;
    /**
     * The user identifier
     */
    userId: string;
}
