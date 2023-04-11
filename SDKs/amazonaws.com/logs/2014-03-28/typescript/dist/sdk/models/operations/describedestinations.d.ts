import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeDestinationsXAmzTargetEnum {
    Logs20140328DescribeDestinations = "Logs_20140328.DescribeDestinations"
}
export declare class DescribeDestinationsRequest extends SpeakeasyBase {
    describeDestinationsRequest: shared.DescribeDestinationsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeDestinationsXAmzTargetEnum;
    /**
     * Pagination limit
     */
    limit?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class DescribeDestinationsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeDestinationsResponse?: shared.DescribeDestinationsResponse;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
}
