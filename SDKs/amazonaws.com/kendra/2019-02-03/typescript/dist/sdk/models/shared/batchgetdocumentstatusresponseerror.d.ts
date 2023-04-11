import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorCodeEnum } from "./errorcodeenum";
/**
 * Provides a response when the status of a document could not be retrieved.
 */
export declare class BatchGetDocumentStatusResponseError extends SpeakeasyBase {
    documentId?: string;
    errorCode?: ErrorCodeEnum;
    errorMessage?: string;
}
