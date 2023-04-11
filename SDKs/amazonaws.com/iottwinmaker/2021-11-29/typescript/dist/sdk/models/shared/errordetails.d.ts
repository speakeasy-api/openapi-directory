import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorCodeEnum } from "./errorcodeenum";
/**
 * The error details.
 */
export declare class ErrorDetails extends SpeakeasyBase {
    code?: ErrorCodeEnum;
    message?: string;
}
