import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTListGroupsActionEnum {
    ListGroups = "ListGroups"
}
export declare enum POSTListGroupsVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class POSTListGroupsRequest extends SpeakeasyBase {
    action: POSTListGroupsActionEnum;
    /**
     * Pagination token
     */
    marker?: string;
    /**
     * Pagination limit
     */
    maxItems?: string;
    requestBody?: Uint8Array;
    version: POSTListGroupsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTListGroupsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
