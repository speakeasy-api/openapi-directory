import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTListGroupPoliciesActionEnum {
    ListGroupPolicies = "ListGroupPolicies"
}
export declare enum POSTListGroupPoliciesVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class POSTListGroupPoliciesRequest extends SpeakeasyBase {
    action: POSTListGroupPoliciesActionEnum;
    /**
     * Pagination token
     */
    marker?: string;
    /**
     * Pagination limit
     */
    maxItems?: string;
    requestBody?: Uint8Array;
    version: POSTListGroupPoliciesVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTListGroupPoliciesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
