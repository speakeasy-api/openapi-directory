import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeTableStatisticsXAmzTargetEnum {
    AmazonDMSv20160101DescribeTableStatistics = "AmazonDMSv20160101.DescribeTableStatistics"
}
export declare class DescribeTableStatisticsRequest extends SpeakeasyBase {
    describeTableStatisticsMessage: shared.DescribeTableStatisticsMessage;
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
    xAmzTarget: DescribeTableStatisticsXAmzTargetEnum;
}
export declare class DescribeTableStatisticsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeTableStatisticsResponse?: shared.DescribeTableStatisticsResponse;
    /**
     * InvalidResourceStateFault
     */
    invalidResourceStateFault?: any;
    /**
     * ResourceNotFoundFault
     */
    resourceNotFoundFault?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
