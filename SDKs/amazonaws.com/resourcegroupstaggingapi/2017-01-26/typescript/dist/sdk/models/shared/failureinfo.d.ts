import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorCodeEnum } from "./errorcodeenum";
export declare class FailureInfo extends SpeakeasyBase {
    errorCode?: ErrorCodeEnum;
    errorMessage?: string;
    statusCode?: number;
}
