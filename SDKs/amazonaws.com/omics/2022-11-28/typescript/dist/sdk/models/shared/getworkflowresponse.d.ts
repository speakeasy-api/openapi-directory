import { SpeakeasyBase } from "../../../internal/utils";
import { WorkflowEngineEnum } from "./workflowengineenum";
import { WorkflowParameter } from "./workflowparameter";
import { WorkflowStatusEnum } from "./workflowstatusenum";
import { WorkflowTypeEnum } from "./workflowtypeenum";
/**
 * Success
 */
export declare class GetWorkflowResponse extends SpeakeasyBase {
    arn?: string;
    creationTime?: Date;
    definition?: string;
    description?: string;
    digest?: string;
    engine?: WorkflowEngineEnum;
    id?: string;
    main?: string;
    name?: string;
    parameterTemplate?: Record<string, WorkflowParameter>;
    status?: WorkflowStatusEnum;
    statusMessage?: string;
    storageCapacity?: number;
    tags?: Record<string, string>;
    type?: WorkflowTypeEnum;
}
