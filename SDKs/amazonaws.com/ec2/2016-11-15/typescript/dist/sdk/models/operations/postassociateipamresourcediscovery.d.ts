import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTAssociateIpamResourceDiscoveryActionEnum {
    AssociateIpamResourceDiscovery = "AssociateIpamResourceDiscovery"
}
export declare enum POSTAssociateIpamResourceDiscoveryVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTAssociateIpamResourceDiscoveryRequest extends SpeakeasyBase {
    action: POSTAssociateIpamResourceDiscoveryActionEnum;
    requestBody?: Uint8Array;
    version: POSTAssociateIpamResourceDiscoveryVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTAssociateIpamResourceDiscoveryResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
