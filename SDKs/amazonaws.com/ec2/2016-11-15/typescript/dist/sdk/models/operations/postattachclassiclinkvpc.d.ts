import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTAttachClassicLinkVpcActionEnum {
    AttachClassicLinkVpc = "AttachClassicLinkVpc"
}
export declare enum POSTAttachClassicLinkVpcVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTAttachClassicLinkVpcRequest extends SpeakeasyBase {
    action: POSTAttachClassicLinkVpcActionEnum;
    requestBody?: Uint8Array;
    version: POSTAttachClassicLinkVpcVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTAttachClassicLinkVpcResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
