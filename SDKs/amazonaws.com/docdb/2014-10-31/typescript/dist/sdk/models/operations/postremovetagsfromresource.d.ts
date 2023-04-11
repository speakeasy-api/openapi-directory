import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTRemoveTagsFromResourceActionEnum {
    RemoveTagsFromResource = "RemoveTagsFromResource"
}
export declare enum POSTRemoveTagsFromResourceVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class POSTRemoveTagsFromResourceRequest extends SpeakeasyBase {
    action: POSTRemoveTagsFromResourceActionEnum;
    requestBody?: Uint8Array;
    version: POSTRemoveTagsFromResourceVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTRemoveTagsFromResourceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
