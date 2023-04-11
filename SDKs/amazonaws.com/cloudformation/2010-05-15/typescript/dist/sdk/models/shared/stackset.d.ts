import { SpeakeasyBase } from "../../../internal/utils";
import { AutoDeployment } from "./autodeployment";
import { CapabilityEnum } from "./capabilityenum";
import { ManagedExecution } from "./managedexecution";
import { Parameter } from "./parameter";
import { PermissionModelsEnum } from "./permissionmodelsenum";
import { StackSetDriftDetectionDetails } from "./stacksetdriftdetectiondetails";
import { StackSetStatusEnum } from "./stacksetstatusenum";
import { Tag } from "./tag";
/**
 * A structure that contains information about a stack set. A stack set enables you to provision stacks into Amazon Web Services accounts and across Regions by using a single CloudFormation template. In the stack set, you specify the template to use, in addition to any parameters and capabilities that the template requires.
 */
export declare class StackSet extends SpeakeasyBase {
    administrationRoleARN?: string;
    autoDeployment?: AutoDeployment;
    capabilities?: CapabilityEnum[];
    description?: string;
    executionRoleName?: string;
    managedExecution?: ManagedExecution;
    organizationalUnitIds?: string[];
    parameters?: Parameter[];
    permissionModel?: PermissionModelsEnum;
    regions?: string[];
    stackSetARN?: string;
    stackSetDriftDetectionDetails?: StackSetDriftDetectionDetails;
    stackSetId?: string;
    stackSetName?: string;
    status?: StackSetStatusEnum;
    tags?: Tag[];
    templateBody?: string;
}
