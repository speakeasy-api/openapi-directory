import { SpeakeasyBase } from "../../../internal/utils";
import { IpAddressTypeEnum } from "./ipaddresstypeenum";
export declare class SetIpAddressTypeInput extends SpeakeasyBase {
    ipAddressType: IpAddressTypeEnum;
    loadBalancerArn: string;
}
