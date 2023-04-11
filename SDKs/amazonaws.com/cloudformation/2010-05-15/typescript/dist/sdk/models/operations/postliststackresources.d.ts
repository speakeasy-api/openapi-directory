import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTListStackResourcesActionEnum {
    ListStackResources = "ListStackResources"
}
export declare enum POSTListStackResourcesVersionEnum {
    TwoThousandAndTen0515 = "2010-05-15"
}
export declare class POSTListStackResourcesRequest extends SpeakeasyBase {
    action: POSTListStackResourcesActionEnum;
    /**
     * Pagination token
     */
    nextToken?: string;
    requestBody?: Uint8Array;
    version: POSTListStackResourcesVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTListStackResourcesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
