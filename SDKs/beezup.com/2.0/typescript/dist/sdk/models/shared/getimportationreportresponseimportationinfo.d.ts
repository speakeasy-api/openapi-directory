import { SpeakeasyBase } from "../../../internal/utils";
import { InputFileConfiguration } from "./inputfileconfiguration";
export declare class GetImportationReportResponseImportationInfo extends SpeakeasyBase {
    beginUtcDate: Date;
    endUtcDate: Date;
    inputConfiguration: InputFileConfiguration;
    userId: string;
}
