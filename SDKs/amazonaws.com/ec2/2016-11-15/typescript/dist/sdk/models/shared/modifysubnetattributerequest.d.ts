import { SpeakeasyBase } from "../../../internal/utils";
import { AttributeBooleanValue } from "./attributebooleanvalue";
import { HostnameTypeEnum } from "./hostnametypeenum";
export declare class ModifySubnetAttributeRequest extends SpeakeasyBase {
    assignIpv6AddressOnCreation?: AttributeBooleanValue;
    customerOwnedIpv4Pool?: string;
    disableLniAtDeviceIndex?: AttributeBooleanValue;
    enableDns64?: AttributeBooleanValue;
    enableLniAtDeviceIndex?: number;
    enableResourceNameDnsAAAARecordOnLaunch?: AttributeBooleanValue;
    enableResourceNameDnsARecordOnLaunch?: AttributeBooleanValue;
    mapCustomerOwnedIpOnLaunch?: AttributeBooleanValue;
    mapPublicIpOnLaunch?: AttributeBooleanValue;
    privateDnsHostnameTypeOnLaunch?: HostnameTypeEnum;
    subnetId: string;
}
