import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorCodeEnum } from "./errorcodeenum";
/**
 * The unique failed custom vocabulary item from the custom vocabulary list.
 */
export declare class FailedCustomVocabularyItem extends SpeakeasyBase {
    errorCode?: ErrorCodeEnum;
    errorMessage?: string;
    itemId?: string;
}
