import { SpeakeasyBase } from "../../../internal/utils";
import { DestinationFlowConfig } from "./destinationflowconfig";
import { ExecutionDetails } from "./executiondetails";
import { FlowStatusEnum } from "./flowstatusenum";
import { MetadataCatalogConfig } from "./metadatacatalogconfig";
import { MetadataCatalogDetail } from "./metadatacatalogdetail";
import { SourceFlowConfig } from "./sourceflowconfig";
import { Task } from "./task";
import { TriggerConfig } from "./triggerconfig";
/**
 * Success
 */
export declare class DescribeFlowResponse extends SpeakeasyBase {
    createdAt?: Date;
    createdBy?: string;
    description?: string;
    destinationFlowConfigList?: DestinationFlowConfig[];
    flowArn?: string;
    flowName?: string;
    flowStatus?: FlowStatusEnum;
    flowStatusMessage?: string;
    kmsArn?: string;
    lastRunExecutionDetails?: ExecutionDetails;
    lastRunMetadataCatalogDetails?: MetadataCatalogDetail[];
    lastUpdatedAt?: Date;
    lastUpdatedBy?: string;
    metadataCatalogConfig?: MetadataCatalogConfig;
    schemaVersion?: number;
    sourceFlowConfig?: SourceFlowConfig;
    tags?: Record<string, string>;
    tasks?: Task[];
    triggerConfig?: TriggerConfig;
}
