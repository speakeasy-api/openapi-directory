import { SpeakeasyBase } from "../../../internal/utils";
import { EngineFamilyEnum } from "./enginefamilyenum";
import { TagList } from "./taglist";
import { UserAuthConfig } from "./userauthconfig";
export declare class CreateDBProxyRequest extends SpeakeasyBase {
    auth: UserAuthConfig[];
    dbProxyName: string;
    debugLogging?: boolean;
    engineFamily: EngineFamilyEnum;
    idleClientTimeout?: number;
    requireTLS?: boolean;
    roleArn: string;
    tags?: TagList[];
    vpcSecurityGroupIds?: string[];
    vpcSubnetIds: string[];
}
