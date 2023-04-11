import { SpeakeasyBase } from "../../../internal/utils";
import { HostnameTypeEnum } from "./hostnametypeenum";
export declare class ModifyPrivateDnsNameOptionsRequest extends SpeakeasyBase {
    dryRun?: boolean;
    enableResourceNameDnsAAAARecord?: boolean;
    enableResourceNameDnsARecord?: boolean;
    instanceId: string;
    privateDnsHostnameType?: HostnameTypeEnum;
}
