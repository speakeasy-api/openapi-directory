import { SpeakeasyBase } from "../../../internal/utils";
import { HandlerErrorCodeEnum } from "./handlererrorcodeenum";
import { OperationStatusEnum } from "./operationstatusenum";
export declare class RecordHandlerProgressInput extends SpeakeasyBase {
    bearerToken: string;
    clientRequestToken?: string;
    currentOperationStatus?: OperationStatusEnum;
    errorCode?: HandlerErrorCodeEnum;
    operationStatus: OperationStatusEnum;
    resourceModel?: string;
    statusMessage?: string;
}
