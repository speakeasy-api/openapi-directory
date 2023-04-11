import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETModifyVpcAttributeActionEnum {
    ModifyVpcAttribute = "ModifyVpcAttribute"
}
/**
 * Describes a value for a resource attribute that is a Boolean value.
 */
export declare class GETModifyVpcAttributeEnableDNSHostnames extends SpeakeasyBase {
    value?: boolean;
}
/**
 * Describes a value for a resource attribute that is a Boolean value.
 */
export declare class GETModifyVpcAttributeEnableDNSSupport extends SpeakeasyBase {
    value?: boolean;
}
/**
 * Describes a value for a resource attribute that is a Boolean value.
 */
export declare class GETModifyVpcAttributeEnableNetworkAddressUsageMetrics extends SpeakeasyBase {
    value?: boolean;
}
export declare enum GETModifyVpcAttributeVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETModifyVpcAttributeRequest extends SpeakeasyBase {
    action: GETModifyVpcAttributeActionEnum;
    /**
     * <p>Indicates whether the instances launched in the VPC get DNS hostnames. If enabled, instances in the VPC get DNS hostnames; otherwise, they do not.</p> <p>You cannot modify the DNS resolution and DNS hostnames attributes in the same request. Use separate requests for each attribute. You can only enable DNS hostnames if you've enabled DNS support.</p>
     */
    enableDnsHostnames?: GETModifyVpcAttributeEnableDNSHostnames;
    /**
     * <p>Indicates whether the DNS resolution is supported for the VPC. If enabled, queries to the Amazon provided DNS server at the 169.254.169.253 IP address, or the reserved IP address at the base of the VPC network range "plus two" succeed. If disabled, the Amazon provided DNS service in the VPC that resolves public DNS hostnames to IP addresses is not enabled.</p> <p>You cannot modify the DNS resolution and DNS hostnames attributes in the same request. Use separate requests for each attribute.</p>
     */
    enableDnsSupport?: GETModifyVpcAttributeEnableDNSSupport;
    /**
     * Indicates whether Network Address Usage metrics are enabled for your VPC.
     */
    enableNetworkAddressUsageMetrics?: GETModifyVpcAttributeEnableNetworkAddressUsageMetrics;
    version: GETModifyVpcAttributeVersionEnum;
    /**
     * The ID of the VPC.
     */
    vpcId: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETModifyVpcAttributeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
