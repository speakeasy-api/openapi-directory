import { SpeakeasyBase } from "../../../internal/utils";
import { ExportJobProperties } from "./exportjobproperties";
/**
 * Success
 */
export declare class ListFHIRExportJobsResponse extends SpeakeasyBase {
    exportJobPropertiesList: ExportJobProperties[];
    nextToken?: string;
}
