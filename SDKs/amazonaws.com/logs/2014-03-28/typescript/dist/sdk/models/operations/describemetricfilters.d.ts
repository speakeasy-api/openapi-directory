import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeMetricFiltersXAmzTargetEnum {
    Logs20140328DescribeMetricFilters = "Logs_20140328.DescribeMetricFilters"
}
export declare class DescribeMetricFiltersRequest extends SpeakeasyBase {
    describeMetricFiltersRequest: shared.DescribeMetricFiltersRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeMetricFiltersXAmzTargetEnum;
    /**
     * Pagination limit
     */
    limit?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class DescribeMetricFiltersResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeMetricFiltersResponse?: shared.DescribeMetricFiltersResponse;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
