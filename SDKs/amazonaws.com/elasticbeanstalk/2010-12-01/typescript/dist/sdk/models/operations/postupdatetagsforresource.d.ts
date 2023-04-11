import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTUpdateTagsForResourceActionEnum {
    UpdateTagsForResource = "UpdateTagsForResource"
}
export declare enum POSTUpdateTagsForResourceVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class POSTUpdateTagsForResourceRequest extends SpeakeasyBase {
    action: POSTUpdateTagsForResourceActionEnum;
    requestBody?: Uint8Array;
    version: POSTUpdateTagsForResourceVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTUpdateTagsForResourceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
