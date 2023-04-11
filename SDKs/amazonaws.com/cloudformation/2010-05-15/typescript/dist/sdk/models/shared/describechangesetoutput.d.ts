import { SpeakeasyBase } from "../../../internal/utils";
import { CapabilityEnum } from "./capabilityenum";
import { Change } from "./change";
import { ChangeSetStatusEnum } from "./changesetstatusenum";
import { ExecutionStatusEnum } from "./executionstatusenum";
import { Parameter } from "./parameter";
import { RollbackConfiguration } from "./rollbackconfiguration";
import { Tag } from "./tag";
/**
 * The output for the <a>DescribeChangeSet</a> action.
 */
export declare class DescribeChangeSetOutput extends SpeakeasyBase {
    capabilities?: CapabilityEnum[];
    changeSetId?: string;
    changeSetName?: string;
    changes?: Change[];
    creationTime?: Date;
    description?: string;
    executionStatus?: ExecutionStatusEnum;
    includeNestedStacks?: boolean;
    nextToken?: string;
    notificationARNs?: string[];
    parameters?: Parameter[];
    parentChangeSetId?: string;
    rollbackConfiguration?: RollbackConfiguration;
    rootChangeSetId?: string;
    stackId?: string;
    stackName?: string;
    status?: ChangeSetStatusEnum;
    statusReason?: string;
    tags?: Tag[];
}
