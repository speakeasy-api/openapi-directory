import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETSetIpAddressTypeActionEnum {
    SetIpAddressType = "SetIpAddressType"
}
/**
 * The IP address type. The possible values are <code>ipv4</code> (for IPv4 addresses) and <code>dualstack</code> (for IPv4 and IPv6 addresses). You can’t specify <code>dualstack</code> for a load balancer with a UDP or TCP_UDP listener.
 */
export declare enum GETSetIPAddressTypeIPAddressTypeEnum {
    Ipv4 = "ipv4",
    Dualstack = "dualstack"
}
export declare enum GETSetIpAddressTypeVersionEnum {
    TwoThousandAndFifteen1201 = "2015-12-01"
}
export declare class GETSetIpAddressTypeRequest extends SpeakeasyBase {
    action: GETSetIpAddressTypeActionEnum;
    /**
     * The IP address type. The possible values are <code>ipv4</code> (for IPv4 addresses) and <code>dualstack</code> (for IPv4 and IPv6 addresses). You can’t specify <code>dualstack</code> for a load balancer with a UDP or TCP_UDP listener.
     */
    ipAddressType: GETSetIPAddressTypeIPAddressTypeEnum;
    /**
     * The Amazon Resource Name (ARN) of the load balancer.
     */
    loadBalancerArn: string;
    version: GETSetIpAddressTypeVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETSetIpAddressTypeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
