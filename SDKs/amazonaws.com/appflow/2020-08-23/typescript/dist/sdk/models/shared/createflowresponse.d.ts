import { SpeakeasyBase } from "../../../internal/utils";
import { FlowStatusEnum } from "./flowstatusenum";
/**
 * Success
 */
export declare class CreateFlowResponse extends SpeakeasyBase {
    flowArn?: string;
    flowStatus?: FlowStatusEnum;
}
