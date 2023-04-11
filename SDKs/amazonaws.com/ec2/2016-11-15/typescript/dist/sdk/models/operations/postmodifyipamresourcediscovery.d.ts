import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTModifyIpamResourceDiscoveryActionEnum {
    ModifyIpamResourceDiscovery = "ModifyIpamResourceDiscovery"
}
export declare enum POSTModifyIpamResourceDiscoveryVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTModifyIpamResourceDiscoveryRequest extends SpeakeasyBase {
    action: POSTModifyIpamResourceDiscoveryActionEnum;
    requestBody?: Uint8Array;
    version: POSTModifyIpamResourceDiscoveryVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTModifyIpamResourceDiscoveryResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
