import { SpeakeasyBase } from "../../../internal/utils";
import { ReportDefinition } from "./reportdefinition";
export declare class ModifyReportDefinitionRequest extends SpeakeasyBase {
    /**
     * The definition of AWS Cost and Usage Report. You can specify the report name, time unit, report format, compression format, S3 bucket, additional artifacts, and schema elements in the definition.
     */
    reportDefinition: ReportDefinition;
    /**
     * The name of the report that you want to create. The name must be unique, is case sensitive, and can't include spaces.
     */
    reportName: string;
}
