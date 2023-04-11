import { SpeakeasyBase } from "../../../internal/utils";
import { BatchGetDocumentStatusResponseError } from "./batchgetdocumentstatusresponseerror";
import { Status } from "./status";
/**
 * Success
 */
export declare class BatchGetDocumentStatusResponse extends SpeakeasyBase {
    documentStatusList?: Status[];
    errors?: BatchGetDocumentStatusResponseError[];
}
