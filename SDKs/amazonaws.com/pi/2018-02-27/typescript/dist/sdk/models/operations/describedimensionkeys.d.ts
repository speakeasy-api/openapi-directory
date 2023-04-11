import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeDimensionKeysXAmzTargetEnum {
    PerformanceInsightsv20180227DescribeDimensionKeys = "PerformanceInsightsv20180227.DescribeDimensionKeys"
}
export declare class DescribeDimensionKeysRequest extends SpeakeasyBase {
    describeDimensionKeysRequest: shared.DescribeDimensionKeysRequest;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeDimensionKeysXAmzTargetEnum;
}
export declare class DescribeDimensionKeysResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeDimensionKeysResponse?: shared.DescribeDimensionKeysResponse;
    /**
     * InternalServiceError
     */
    internalServiceError?: any;
    /**
     * InvalidArgumentException
     */
    invalidArgumentException?: any;
    /**
     * NotAuthorizedException
     */
    notAuthorizedException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
