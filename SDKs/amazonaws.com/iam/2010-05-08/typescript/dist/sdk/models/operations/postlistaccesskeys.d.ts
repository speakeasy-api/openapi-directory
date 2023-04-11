import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTListAccessKeysActionEnum {
    ListAccessKeys = "ListAccessKeys"
}
export declare enum POSTListAccessKeysVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class POSTListAccessKeysRequest extends SpeakeasyBase {
    action: POSTListAccessKeysActionEnum;
    /**
     * Pagination token
     */
    marker?: string;
    /**
     * Pagination limit
     */
    maxItems?: string;
    requestBody?: Uint8Array;
    version: POSTListAccessKeysVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTListAccessKeysResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
