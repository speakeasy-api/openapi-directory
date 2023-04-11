import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDeleteIpamResourceDiscoveryActionEnum {
    DeleteIpamResourceDiscovery = "DeleteIpamResourceDiscovery"
}
export declare enum POSTDeleteIpamResourceDiscoveryVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTDeleteIpamResourceDiscoveryRequest extends SpeakeasyBase {
    action: POSTDeleteIpamResourceDiscoveryActionEnum;
    requestBody?: Uint8Array;
    version: POSTDeleteIpamResourceDiscoveryVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDeleteIpamResourceDiscoveryResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
