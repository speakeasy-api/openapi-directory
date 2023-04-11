import { SpeakeasyBase } from "../../../internal/utils";
import { ReportDefinition } from "./reportdefinition";
/**
 * Success
 */
export declare class ListReportDefinitionsResult extends SpeakeasyBase {
    nextToken?: string;
    reportDefinitions?: ReportDefinition[];
}
