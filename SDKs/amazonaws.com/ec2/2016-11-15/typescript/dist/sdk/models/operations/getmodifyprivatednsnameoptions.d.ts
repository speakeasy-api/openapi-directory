import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETModifyPrivateDnsNameOptionsActionEnum {
    ModifyPrivateDnsNameOptions = "ModifyPrivateDnsNameOptions"
}
/**
 * The type of hostname for EC2 instances. For IPv4 only subnets, an instance DNS name must be based on the instance IPv4 address. For IPv6 only subnets, an instance DNS name must be based on the instance ID. For dual-stack subnets, you can specify whether DNS names use the instance IPv4 address or the instance ID.
 */
export declare enum GETModifyPrivateDNSNameOptionsPrivateDNSHostnameTypeEnum {
    IpName = "ip-name",
    ResourceName = "resource-name"
}
export declare enum GETModifyPrivateDnsNameOptionsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETModifyPrivateDnsNameOptionsRequest extends SpeakeasyBase {
    action: GETModifyPrivateDnsNameOptionsActionEnum;
    /**
     * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    /**
     * Indicates whether to respond to DNS queries for instance hostnames with DNS AAAA records.
     */
    enableResourceNameDnsAAAARecord?: boolean;
    /**
     * Indicates whether to respond to DNS queries for instance hostnames with DNS A records.
     */
    enableResourceNameDnsARecord?: boolean;
    /**
     * The ID of the instance.
     */
    instanceId: string;
    /**
     * The type of hostname for EC2 instances. For IPv4 only subnets, an instance DNS name must be based on the instance IPv4 address. For IPv6 only subnets, an instance DNS name must be based on the instance ID. For dual-stack subnets, you can specify whether DNS names use the instance IPv4 address or the instance ID.
     */
    privateDnsHostnameType?: GETModifyPrivateDNSNameOptionsPrivateDNSHostnameTypeEnum;
    version: GETModifyPrivateDnsNameOptionsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETModifyPrivateDnsNameOptionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
