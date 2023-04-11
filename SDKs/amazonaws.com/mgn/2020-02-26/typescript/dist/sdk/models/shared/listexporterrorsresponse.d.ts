import { SpeakeasyBase } from "../../../internal/utils";
import { ExportTaskError } from "./exporttaskerror";
/**
 * List export errors response.
 */
export declare class ListExportErrorsResponse extends SpeakeasyBase {
    items?: ExportTaskError[];
    nextToken?: string;
}
