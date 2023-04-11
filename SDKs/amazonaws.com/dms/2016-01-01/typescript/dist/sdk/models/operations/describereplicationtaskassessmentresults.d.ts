import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeReplicationTaskAssessmentResultsXAmzTargetEnum {
    AmazonDMSv20160101DescribeReplicationTaskAssessmentResults = "AmazonDMSv20160101.DescribeReplicationTaskAssessmentResults"
}
export declare class DescribeReplicationTaskAssessmentResultsRequest extends SpeakeasyBase {
    describeReplicationTaskAssessmentResultsMessage: shared.DescribeReplicationTaskAssessmentResultsMessage;
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
    xAmzTarget: DescribeReplicationTaskAssessmentResultsXAmzTargetEnum;
}
export declare class DescribeReplicationTaskAssessmentResultsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeReplicationTaskAssessmentResultsResponse?: shared.DescribeReplicationTaskAssessmentResultsResponse;
    /**
     * ResourceNotFoundFault
     */
    resourceNotFoundFault?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
