import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeServiceUpdatesXAmzTargetEnum {
    AmazonMemoryDBDescribeServiceUpdates = "AmazonMemoryDB.DescribeServiceUpdates"
}
export declare class DescribeServiceUpdatesRequest extends SpeakeasyBase {
    describeServiceUpdatesRequest: shared.DescribeServiceUpdatesRequest;
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
    xAmzTarget: DescribeServiceUpdatesXAmzTargetEnum;
}
export declare class DescribeServiceUpdatesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeServiceUpdatesResponse?: shared.DescribeServiceUpdatesResponse;
    /**
     * InvalidParameterCombinationException
     */
    invalidParameterCombinationException?: any;
    /**
     * InvalidParameterValueException
     */
    invalidParameterValueException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
