import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Indicates whether the Elastic IP address is for use with instances in a VPC (<code>vpc</code>) or instances in EC2-Classic (<code>standard</code>).
 */
export declare enum AllocateAddressResultDomainEnum {
    Vpc = "vpc",
    Standard = "standard"
}
/**
 * Success
 */
export declare class AllocateAddressResult extends SpeakeasyBase {
    allocationId?: string;
    carrierIp?: string;
    customerOwnedIp?: string;
    customerOwnedIpv4Pool?: string;
    domain?: AllocateAddressResultDomainEnum;
    networkBorderGroup?: string;
    publicIp?: string;
    publicIpv4Pool?: string;
}
