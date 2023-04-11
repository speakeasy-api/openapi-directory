import { SpeakeasyBase } from "../../../internal/utils";
import { UserAuthConfig } from "./userauthconfig";
export declare class ModifyDBProxyRequest extends SpeakeasyBase {
    auth?: UserAuthConfig[];
    dbProxyName: string;
    debugLogging?: boolean;
    idleClientTimeout?: number;
    newDBProxyName?: string;
    requireTLS?: boolean;
    roleArn?: string;
    securityGroups?: string[];
}
