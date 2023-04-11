import { SpeakeasyBase } from "../../../internal/utils";
import { IpAddressFamilyEnum } from "./ipaddressfamilyenum";
/**
 * A complex type for the set of IP addresses for an accelerator.
 */
export declare class IpSet extends SpeakeasyBase {
    ipAddressFamily?: IpAddressFamilyEnum;
    ipAddresses?: string[];
    ipFamily?: string;
}
