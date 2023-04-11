import { SpeakeasyBase } from "../../../internal/utils";
import { ClientConnectOptions } from "./clientconnectoptions";
import { ClientLoginBannerOptions } from "./clientloginbanneroptions";
import { ConnectionLogOptions } from "./connectionlogoptions";
import { DnsServersOptionsModifyStructure } from "./dnsserversoptionsmodifystructure";
import { SelfServicePortalEnum } from "./selfserviceportalenum";
export declare class ModifyClientVpnEndpointRequest extends SpeakeasyBase {
    clientConnectOptions?: ClientConnectOptions;
    clientLoginBannerOptions?: ClientLoginBannerOptions;
    clientVpnEndpointId: string;
    connectionLogOptions?: ConnectionLogOptions;
    description?: string;
    dnsServers?: DnsServersOptionsModifyStructure;
    dryRun?: boolean;
    securityGroupIds?: string[];
    selfServicePortal?: SelfServicePortalEnum;
    serverCertificateArn?: string;
    sessionTimeoutHours?: number;
    splitTunnel?: boolean;
    vpcId?: string;
    vpnPort?: number;
}
