import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeRecommendationLimitationsXAmzTargetEnum {
    AmazonDMSv20160101DescribeRecommendationLimitations = "AmazonDMSv20160101.DescribeRecommendationLimitations"
}
export declare class DescribeRecommendationLimitationsRequest extends SpeakeasyBase {
    describeRecommendationLimitationsRequest: shared.DescribeRecommendationLimitationsRequest;
    /**
     * Pagination limit
     */
    maxRecords?: string;
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
    xAmzTarget: DescribeRecommendationLimitationsXAmzTargetEnum;
}
export declare class DescribeRecommendationLimitationsResponse extends SpeakeasyBase {
    /**
     * AccessDeniedFault
     */
    accessDeniedFault?: any;
    contentType: string;
    /**
     * Success
     */
    describeRecommendationLimitationsResponse?: shared.DescribeRecommendationLimitationsResponse;
    /**
     * InvalidResourceStateFault
     */
    invalidResourceStateFault?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
