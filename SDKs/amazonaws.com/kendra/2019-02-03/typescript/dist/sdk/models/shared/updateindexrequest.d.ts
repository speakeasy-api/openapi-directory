import { SpeakeasyBase } from "../../../internal/utils";
import { CapacityUnitsConfiguration } from "./capacityunitsconfiguration";
import { DocumentMetadataConfiguration } from "./documentmetadataconfiguration";
import { UserContextPolicyEnum } from "./usercontextpolicyenum";
import { UserGroupResolutionConfiguration } from "./usergroupresolutionconfiguration";
import { UserTokenConfiguration } from "./usertokenconfiguration";
export declare class UpdateIndexRequest extends SpeakeasyBase {
    capacityUnits?: CapacityUnitsConfiguration;
    description?: string;
    documentMetadataConfigurationUpdates?: DocumentMetadataConfiguration[];
    id: string;
    name?: string;
    roleArn?: string;
    userContextPolicy?: UserContextPolicyEnum;
    userGroupResolutionConfiguration?: UserGroupResolutionConfiguration;
    userTokenConfigurations?: UserTokenConfiguration[];
}
