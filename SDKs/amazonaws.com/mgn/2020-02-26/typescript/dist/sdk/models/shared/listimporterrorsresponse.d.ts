import { SpeakeasyBase } from "../../../internal/utils";
import { ImportTaskError } from "./importtaskerror";
/**
 * List imports errors response.
 */
export declare class ListImportErrorsResponse extends SpeakeasyBase {
    items?: ImportTaskError[];
    nextToken?: string;
}
