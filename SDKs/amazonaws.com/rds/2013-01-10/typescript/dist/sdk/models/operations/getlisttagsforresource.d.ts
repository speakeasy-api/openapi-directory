import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETListTagsForResourceActionEnum {
    ListTagsForResource = "ListTagsForResource"
}
export declare enum GETListTagsForResourceVersionEnum {
    TwoThousandAndThirteen0110 = "2013-01-10"
}
export declare class GETListTagsForResourceRequest extends SpeakeasyBase {
    action: GETListTagsForResourceActionEnum;
    resourceName: string;
    version: GETListTagsForResourceVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETListTagsForResourceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
