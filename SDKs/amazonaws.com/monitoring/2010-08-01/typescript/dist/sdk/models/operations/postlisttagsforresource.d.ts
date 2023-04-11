import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTListTagsForResourceActionEnum {
    ListTagsForResource = "ListTagsForResource"
}
export declare enum POSTListTagsForResourceVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}
export declare class POSTListTagsForResourceRequest extends SpeakeasyBase {
    action: POSTListTagsForResourceActionEnum;
    requestBody?: Uint8Array;
    version: POSTListTagsForResourceVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTListTagsForResourceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
