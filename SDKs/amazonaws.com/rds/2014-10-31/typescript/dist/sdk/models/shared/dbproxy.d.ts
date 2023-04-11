import { SpeakeasyBase } from "../../../internal/utils";
import { DBProxyStatusEnum } from "./dbproxystatusenum";
import { UserAuthConfigInfo } from "./userauthconfiginfo";
/**
 * <p>The data structure representing a proxy managed by the RDS Proxy.</p> <p>This data type is used as a response element in the <code>DescribeDBProxies</code> action.</p>
 */
export declare class DBProxy extends SpeakeasyBase {
    auth?: UserAuthConfigInfo[];
    createdDate?: Date;
    dbProxyArn?: string;
    dbProxyName?: string;
    debugLogging?: boolean;
    endpoint?: string;
    engineFamily?: string;
    idleClientTimeout?: number;
    requireTLS?: boolean;
    roleArn?: string;
    status?: DBProxyStatusEnum;
    updatedDate?: Date;
    vpcId?: string;
    vpcSecurityGroupIds?: string[];
    vpcSubnetIds?: string[];
}
