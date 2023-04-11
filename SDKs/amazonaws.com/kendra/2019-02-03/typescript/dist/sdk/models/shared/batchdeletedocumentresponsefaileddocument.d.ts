import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorCodeEnum } from "./errorcodeenum";
/**
 * Provides information about documents that could not be removed from an index by the <code>BatchDeleteDocument</code> API.
 */
export declare class BatchDeleteDocumentResponseFailedDocument extends SpeakeasyBase {
    errorCode?: ErrorCodeEnum;
    errorMessage?: string;
    id?: string;
}
