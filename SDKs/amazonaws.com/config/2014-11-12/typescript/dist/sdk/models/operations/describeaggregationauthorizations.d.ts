import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeAggregationAuthorizationsXAmzTargetEnum {
    StarlingDoveServiceDescribeAggregationAuthorizations = "StarlingDoveService.DescribeAggregationAuthorizations"
}
export declare class DescribeAggregationAuthorizationsRequest extends SpeakeasyBase {
    describeAggregationAuthorizationsRequest: shared.DescribeAggregationAuthorizationsRequest;
    /**
     * Pagination limit
     */
    limit?: string;
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
    xAmzTarget: DescribeAggregationAuthorizationsXAmzTargetEnum;
}
export declare class DescribeAggregationAuthorizationsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeAggregationAuthorizationsResponse?: shared.DescribeAggregationAuthorizationsResponse;
    /**
     * InvalidLimitException
     */
    invalidLimitException?: any;
    /**
     * InvalidNextTokenException
     */
    invalidNextTokenException?: any;
    /**
     * InvalidParameterValueException
     */
    invalidParameterValueException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
