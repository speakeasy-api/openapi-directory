import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeSubscriptionFiltersXAmzTargetEnum {
    Logs20140328DescribeSubscriptionFilters = "Logs_20140328.DescribeSubscriptionFilters"
}
export declare class DescribeSubscriptionFiltersRequest extends SpeakeasyBase {
    describeSubscriptionFiltersRequest: shared.DescribeSubscriptionFiltersRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeSubscriptionFiltersXAmzTargetEnum;
    /**
     * Pagination limit
     */
    limit?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class DescribeSubscriptionFiltersResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeSubscriptionFiltersResponse?: shared.DescribeSubscriptionFiltersResponse;
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
