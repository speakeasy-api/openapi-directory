import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTListPolicyVersionsActionEnum {
    ListPolicyVersions = "ListPolicyVersions"
}
export declare enum POSTListPolicyVersionsVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class POSTListPolicyVersionsRequest extends SpeakeasyBase {
    action: POSTListPolicyVersionsActionEnum;
    /**
     * Pagination token
     */
    marker?: string;
    /**
     * Pagination limit
     */
    maxItems?: string;
    requestBody?: Uint8Array;
    version: POSTListPolicyVersionsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTListPolicyVersionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
