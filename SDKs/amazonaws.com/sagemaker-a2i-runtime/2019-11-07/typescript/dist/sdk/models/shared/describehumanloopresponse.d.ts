import { SpeakeasyBase } from "../../../internal/utils";
import { HumanLoopOutput } from "./humanloopoutput";
import { HumanLoopStatusEnum } from "./humanloopstatusenum";
/**
 * Success
 */
export declare class DescribeHumanLoopResponse extends SpeakeasyBase {
    creationTime: Date;
    failureCode?: string;
    failureReason?: string;
    flowDefinitionArn: string;
    humanLoopArn: string;
    humanLoopName: string;
    humanLoopOutput?: HumanLoopOutput;
    humanLoopStatus: HumanLoopStatusEnum;
}
