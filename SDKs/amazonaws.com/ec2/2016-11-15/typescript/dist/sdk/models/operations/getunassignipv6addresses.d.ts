import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETUnassignIpv6AddressesActionEnum {
    UnassignIpv6Addresses = "UnassignIpv6Addresses"
}
export declare enum GETUnassignIpv6AddressesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETUnassignIpv6AddressesRequest extends SpeakeasyBase {
    action: GETUnassignIpv6AddressesActionEnum;
    /**
     * The IPv6 addresses to unassign from the network interface.
     */
    ipv6Addresses?: string[];
    /**
     * The IPv6 prefixes to unassign from the network interface.
     */
    ipv6Prefix?: string[];
    /**
     * The ID of the network interface.
     */
    networkInterfaceId: string;
    version: GETUnassignIpv6AddressesVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETUnassignIpv6AddressesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
