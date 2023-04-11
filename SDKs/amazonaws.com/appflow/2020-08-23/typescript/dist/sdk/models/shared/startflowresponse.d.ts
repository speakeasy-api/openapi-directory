import { SpeakeasyBase } from "../../../internal/utils";
import { FlowStatusEnum } from "./flowstatusenum";
/**
 * Success
 */
export declare class StartFlowResponse extends SpeakeasyBase {
    executionId?: string;
    flowArn?: string;
    flowStatus?: FlowStatusEnum;
}
