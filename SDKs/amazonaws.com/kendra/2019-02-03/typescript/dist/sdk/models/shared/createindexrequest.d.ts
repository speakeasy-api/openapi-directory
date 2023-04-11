import { SpeakeasyBase } from "../../../internal/utils";
import { IndexEditionEnum } from "./indexeditionenum";
import { ServerSideEncryptionConfiguration } from "./serversideencryptionconfiguration";
import { Tag } from "./tag";
import { UserContextPolicyEnum } from "./usercontextpolicyenum";
import { UserGroupResolutionConfiguration } from "./usergroupresolutionconfiguration";
import { UserTokenConfiguration } from "./usertokenconfiguration";
export declare class CreateIndexRequest extends SpeakeasyBase {
    clientToken?: string;
    description?: string;
    edition?: IndexEditionEnum;
    name: string;
    roleArn: string;
    serverSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;
    tags?: Tag[];
    userContextPolicy?: UserContextPolicyEnum;
    userGroupResolutionConfiguration?: UserGroupResolutionConfiguration;
    userTokenConfigurations?: UserTokenConfiguration[];
}
