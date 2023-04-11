import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeEventSubscriptionsXAmzTargetEnum {
    AmazonDMSv20160101DescribeEventSubscriptions = "AmazonDMSv20160101.DescribeEventSubscriptions"
}
export declare class DescribeEventSubscriptionsRequest extends SpeakeasyBase {
    describeEventSubscriptionsMessage: shared.DescribeEventSubscriptionsMessage;
    /**
     * Pagination token
     */
    marker?: string;
    /**
     * Pagination limit
     */
    maxRecords?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeEventSubscriptionsXAmzTargetEnum;
}
export declare class DescribeEventSubscriptionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeEventSubscriptionsResponse?: shared.DescribeEventSubscriptionsResponse;
    /**
     * ResourceNotFoundFault
     */
    resourceNotFoundFault?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
