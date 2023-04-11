import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorCodeEnum } from "./errorcodeenum";
/**
 * Provides information about a document that could not be indexed.
 */
export declare class BatchPutDocumentResponseFailedDocument extends SpeakeasyBase {
    errorCode?: ErrorCodeEnum;
    errorMessage?: string;
    id?: string;
}
