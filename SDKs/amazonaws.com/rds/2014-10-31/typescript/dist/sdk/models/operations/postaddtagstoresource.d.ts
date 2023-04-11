import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTAddTagsToResourceActionEnum {
    AddTagsToResource = "AddTagsToResource"
}
export declare enum POSTAddTagsToResourceVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class POSTAddTagsToResourceRequest extends SpeakeasyBase {
    action: POSTAddTagsToResourceActionEnum;
    requestBody?: Uint8Array;
    version: POSTAddTagsToResourceVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTAddTagsToResourceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
