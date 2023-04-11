import { SpeakeasyBase } from "../../../internal/utils";
import { ImportTask } from "./importtask";
/**
 * List import response.
 */
export declare class ListImportsResponse extends SpeakeasyBase {
    items?: ImportTask[];
    nextToken?: string;
}
