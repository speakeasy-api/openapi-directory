import { SpeakeasyBase } from "../../../internal/utils";
import { ImportErrorData } from "./importerrordata";
import { ImportErrorTypeEnum } from "./importerrortypeenum";
/**
 * Import task error.
 */
export declare class ImportTaskError extends SpeakeasyBase {
    errorData?: ImportErrorData;
    errorDateTime?: string;
    errorType?: ImportErrorTypeEnum;
}
