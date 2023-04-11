import { SpeakeasyBase } from "../../../internal/utils";
import { ImportJobProperties } from "./importjobproperties";
/**
 * Success
 */
export declare class ListFHIRImportJobsResponse extends SpeakeasyBase {
    importJobPropertiesList: ImportJobProperties[];
    nextToken?: string;
}
