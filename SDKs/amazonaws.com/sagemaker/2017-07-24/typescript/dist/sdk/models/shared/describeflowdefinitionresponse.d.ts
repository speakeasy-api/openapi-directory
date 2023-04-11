import { SpeakeasyBase } from "../../../internal/utils";
import { FlowDefinitionOutputConfig } from "./flowdefinitionoutputconfig";
import { FlowDefinitionStatusEnum } from "./flowdefinitionstatusenum";
import { HumanLoopActivationConfig } from "./humanloopactivationconfig";
import { HumanLoopConfig } from "./humanloopconfig";
import { HumanLoopRequestSource } from "./humanlooprequestsource";
/**
 * Success
 */
export declare class DescribeFlowDefinitionResponse extends SpeakeasyBase {
    creationTime: Date;
    failureReason?: string;
    flowDefinitionArn: string;
    flowDefinitionName: string;
    flowDefinitionStatus: FlowDefinitionStatusEnum;
    humanLoopActivationConfig?: HumanLoopActivationConfig;
    humanLoopConfig: HumanLoopConfig;
    humanLoopRequestSource?: HumanLoopRequestSource;
    outputConfig: FlowDefinitionOutputConfig;
    roleArn: string;
}
