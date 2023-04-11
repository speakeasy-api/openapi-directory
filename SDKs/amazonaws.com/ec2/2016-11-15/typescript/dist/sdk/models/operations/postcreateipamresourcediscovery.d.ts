import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCreateIpamResourceDiscoveryActionEnum {
    CreateIpamResourceDiscovery = "CreateIpamResourceDiscovery"
}
export declare enum POSTCreateIpamResourceDiscoveryVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTCreateIpamResourceDiscoveryRequest extends SpeakeasyBase {
    action: POSTCreateIpamResourceDiscoveryActionEnum;
    requestBody?: Uint8Array;
    version: POSTCreateIpamResourceDiscoveryVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCreateIpamResourceDiscoveryResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
