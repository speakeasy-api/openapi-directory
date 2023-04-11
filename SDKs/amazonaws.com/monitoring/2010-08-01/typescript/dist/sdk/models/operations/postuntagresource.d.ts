import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTUntagResourceActionEnum {
    UntagResource = "UntagResource"
}
export declare enum POSTUntagResourceVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}
export declare class POSTUntagResourceRequest extends SpeakeasyBase {
    action: POSTUntagResourceActionEnum;
    requestBody?: Uint8Array;
    version: POSTUntagResourceVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTUntagResourceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
