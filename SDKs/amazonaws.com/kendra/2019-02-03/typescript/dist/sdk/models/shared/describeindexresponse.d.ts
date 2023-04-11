import { SpeakeasyBase } from "../../../internal/utils";
import { CapacityUnitsConfiguration } from "./capacityunitsconfiguration";
import { DocumentMetadataConfiguration } from "./documentmetadataconfiguration";
import { IndexEditionEnum } from "./indexeditionenum";
import { IndexStatistics } from "./indexstatistics";
import { IndexStatusEnum } from "./indexstatusenum";
import { ServerSideEncryptionConfiguration } from "./serversideencryptionconfiguration";
import { UserContextPolicyEnum } from "./usercontextpolicyenum";
import { UserGroupResolutionConfiguration } from "./usergroupresolutionconfiguration";
import { UserTokenConfiguration } from "./usertokenconfiguration";
/**
 * Success
 */
export declare class DescribeIndexResponse extends SpeakeasyBase {
    capacityUnits?: CapacityUnitsConfiguration;
    createdAt?: Date;
    description?: string;
    documentMetadataConfigurations?: DocumentMetadataConfiguration[];
    edition?: IndexEditionEnum;
    errorMessage?: string;
    id?: string;
    indexStatistics?: IndexStatistics;
    name?: string;
    roleArn?: string;
    serverSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;
    status?: IndexStatusEnum;
    updatedAt?: Date;
    userContextPolicy?: UserContextPolicyEnum;
    userGroupResolutionConfiguration?: UserGroupResolutionConfiguration;
    userTokenConfigurations?: UserTokenConfiguration[];
}
