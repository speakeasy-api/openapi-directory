import { SpeakeasyBase } from "../../../internal/utils";
import { SourceFlowConfig } from "./sourceflowconfig";
import { Task } from "./task";
import { TriggerConfig } from "./triggerconfig";
/**
 * The configurations that control how Customer Profiles retrieves data from the source, Amazon AppFlow. Customer Profiles uses this information to create an AppFlow flow on behalf of customers.
 */
export declare class FlowDefinition extends SpeakeasyBase {
    description?: string;
    flowName: string;
    kmsArn: string;
    sourceFlowConfig: SourceFlowConfig;
    tasks: Task[];
    triggerConfig: TriggerConfig;
}
