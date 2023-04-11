import { SpeakeasyBase } from "../../../internal/utils";
import { FlowStatusEnum } from "./flowstatusenum";
/**
 * Success
 */
export declare class StopFlowResponse extends SpeakeasyBase {
    flowArn?: string;
    flowStatus?: FlowStatusEnum;
}
