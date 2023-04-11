import { SpeakeasyBase } from "../../../internal/utils";
import { ConnectorTypeEnum } from "./connectortypeenum";
import { ExecutionDetails } from "./executiondetails";
import { FlowStatusEnum } from "./flowstatusenum";
import { TriggerTypeEnum } from "./triggertypeenum";
/**
 *  The properties of the flow, such as its source, destination, trigger type, and so on.
 */
export declare class FlowDefinition extends SpeakeasyBase {
    createdAt?: Date;
    createdBy?: string;
    description?: string;
    destinationConnectorLabel?: string;
    destinationConnectorType?: ConnectorTypeEnum;
    flowArn?: string;
    flowName?: string;
    flowStatus?: FlowStatusEnum;
    lastRunExecutionDetails?: ExecutionDetails;
    lastUpdatedAt?: Date;
    lastUpdatedBy?: string;
    sourceConnectorLabel?: string;
    sourceConnectorType?: ConnectorTypeEnum;
    tags?: Record<string, string>;
    triggerType?: TriggerTypeEnum;
}
