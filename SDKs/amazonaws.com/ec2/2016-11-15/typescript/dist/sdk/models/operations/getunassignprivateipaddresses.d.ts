import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETUnassignPrivateIpAddressesActionEnum {
    UnassignPrivateIpAddresses = "UnassignPrivateIpAddresses"
}
export declare enum GETUnassignPrivateIpAddressesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETUnassignPrivateIpAddressesRequest extends SpeakeasyBase {
    action: GETUnassignPrivateIpAddressesActionEnum;
    /**
     * The IPv4 prefixes to unassign from the network interface.
     */
    ipv4Prefix?: string[];
    /**
     * The ID of the network interface.
     */
    networkInterfaceId: string;
    /**
     * The secondary private IP addresses to unassign from the network interface. You can specify this option multiple times to unassign more than one IP address.
     */
    privateIpAddress?: string[];
    version: GETUnassignPrivateIpAddressesVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETUnassignPrivateIpAddressesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
