import { SpeakeasyBase } from "../../../internal/utils";
import { ExportTask } from "./exporttask";
/**
 * List export response.
 */
export declare class ListExportsResponse extends SpeakeasyBase {
    items?: ExportTask[];
    nextToken?: string;
}
