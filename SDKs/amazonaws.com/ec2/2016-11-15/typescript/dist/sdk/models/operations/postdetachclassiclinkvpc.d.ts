import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDetachClassicLinkVpcActionEnum {
    DetachClassicLinkVpc = "DetachClassicLinkVpc"
}
export declare enum POSTDetachClassicLinkVpcVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTDetachClassicLinkVpcRequest extends SpeakeasyBase {
    action: POSTDetachClassicLinkVpcActionEnum;
    requestBody?: Uint8Array;
    version: POSTDetachClassicLinkVpcVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDetachClassicLinkVpcResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
