import { SpeakeasyBase } from "../../../internal/utils";
import { CallAsEnum } from "./callasenum";
export declare class StopStackSetOperationInput extends SpeakeasyBase {
    callAs?: CallAsEnum;
    operationId: string;
    stackSetName: string;
}
