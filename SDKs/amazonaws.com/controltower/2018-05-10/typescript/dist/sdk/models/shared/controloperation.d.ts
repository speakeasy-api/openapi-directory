import { SpeakeasyBase } from "../../../internal/utils";
import { ControlOperationStatusEnum } from "./controloperationstatusenum";
import { ControlOperationTypeEnum } from "./controloperationtypeenum";
/**
 * An operation performed by the control.
 */
export declare class ControlOperation extends SpeakeasyBase {
    endTime?: Date;
    operationType?: ControlOperationTypeEnum;
    startTime?: Date;
    status?: ControlOperationStatusEnum;
    statusMessage?: string;
}
