import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorCodeEnum } from "./errorcodeenum";
/**
 * Contains error messages associated with the deletion request.
 */
export declare class BatchDeleteDetectorErrorEntry extends SpeakeasyBase {
    errorCode?: ErrorCodeEnum;
    errorMessage?: string;
    messageId?: string;
}
