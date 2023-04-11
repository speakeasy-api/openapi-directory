import { SpeakeasyBase } from "../../../internal/utils";
import { WarningCodeEnum } from "./warningcodeenum";
/**
 * The warning code and message that explains a problem with a query.
 */
export declare class Warning extends SpeakeasyBase {
    code?: WarningCodeEnum;
    message?: string;
}
