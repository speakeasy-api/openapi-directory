import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDisassociateIpamResourceDiscoveryActionEnum {
    DisassociateIpamResourceDiscovery = "DisassociateIpamResourceDiscovery"
}
export declare enum POSTDisassociateIpamResourceDiscoveryVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTDisassociateIpamResourceDiscoveryRequest extends SpeakeasyBase {
    action: POSTDisassociateIpamResourceDiscoveryActionEnum;
    requestBody?: Uint8Array;
    version: POSTDisassociateIpamResourceDiscoveryVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDisassociateIpamResourceDiscoveryResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
