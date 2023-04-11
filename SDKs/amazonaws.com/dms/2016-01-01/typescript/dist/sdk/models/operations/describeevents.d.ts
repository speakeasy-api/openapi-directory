import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeEventsXAmzTargetEnum {
    AmazonDMSv20160101DescribeEvents = "AmazonDMSv20160101.DescribeEvents"
}
export declare class DescribeEventsRequest extends SpeakeasyBase {
    describeEventsMessage: shared.DescribeEventsMessage;
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
    xAmzTarget: DescribeEventsXAmzTargetEnum;
}
export declare class DescribeEventsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeEventsResponse?: shared.DescribeEventsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
