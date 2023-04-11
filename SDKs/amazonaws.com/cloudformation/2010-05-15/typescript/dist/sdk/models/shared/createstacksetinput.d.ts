import { SpeakeasyBase } from "../../../internal/utils";
import { AutoDeployment } from "./autodeployment";
import { CallAsEnum } from "./callasenum";
import { CapabilityEnum } from "./capabilityenum";
import { ManagedExecution } from "./managedexecution";
import { Parameter } from "./parameter";
import { PermissionModelsEnum } from "./permissionmodelsenum";
import { Tag } from "./tag";
export declare class CreateStackSetInput extends SpeakeasyBase {
    administrationRoleARN?: string;
    autoDeployment?: AutoDeployment;
    callAs?: CallAsEnum;
    capabilities?: CapabilityEnum[];
    clientRequestToken?: string;
    description?: string;
    executionRoleName?: string;
    managedExecution?: ManagedExecution;
    parameters?: Parameter[];
    permissionModel?: PermissionModelsEnum;
    stackId?: string;
    stackSetName: string;
    tags?: Tag[];
    templateBody?: string;
    templateURL?: string;
}
