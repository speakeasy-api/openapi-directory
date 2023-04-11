import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeRecommendationsXAmzTargetEnum {
    AmazonDMSv20160101DescribeRecommendations = "AmazonDMSv20160101.DescribeRecommendations"
}
export declare class DescribeRecommendationsRequest extends SpeakeasyBase {
    describeRecommendationsRequest: shared.DescribeRecommendationsRequest;
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
    xAmzTarget: DescribeRecommendationsXAmzTargetEnum;
}
export declare class DescribeRecommendationsResponse extends SpeakeasyBase {
    /**
     * AccessDeniedFault
     */
    accessDeniedFault?: any;
    contentType: string;
    /**
     * Success
     */
    describeRecommendationsResponse?: shared.DescribeRecommendationsResponse;
    /**
     * InvalidResourceStateFault
     */
    invalidResourceStateFault?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
