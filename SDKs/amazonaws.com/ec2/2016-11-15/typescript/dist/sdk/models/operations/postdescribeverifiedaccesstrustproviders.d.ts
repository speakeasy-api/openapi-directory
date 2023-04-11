import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDescribeVerifiedAccessTrustProvidersActionEnum {
    DescribeVerifiedAccessTrustProviders = "DescribeVerifiedAccessTrustProviders"
}
export declare enum POSTDescribeVerifiedAccessTrustProvidersVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTDescribeVerifiedAccessTrustProvidersRequest extends SpeakeasyBase {
    action: POSTDescribeVerifiedAccessTrustProvidersActionEnum;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    requestBody?: Uint8Array;
    version: POSTDescribeVerifiedAccessTrustProvidersVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDescribeVerifiedAccessTrustProvidersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
