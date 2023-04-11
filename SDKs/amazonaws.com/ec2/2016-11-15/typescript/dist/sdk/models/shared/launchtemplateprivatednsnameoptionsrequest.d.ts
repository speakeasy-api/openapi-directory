import { SpeakeasyBase } from "../../../internal/utils";
import { HostnameTypeEnum } from "./hostnametypeenum";
/**
 * Describes the options for instance hostnames.
 */
export declare class LaunchTemplatePrivateDnsNameOptionsRequest extends SpeakeasyBase {
    enableResourceNameDnsAAAARecord?: boolean;
    enableResourceNameDnsARecord?: boolean;
    hostnameType?: HostnameTypeEnum;
}
