import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeReplicationTaskAssessmentRunsXAmzTargetEnum {
    AmazonDMSv20160101DescribeReplicationTaskAssessmentRuns = "AmazonDMSv20160101.DescribeReplicationTaskAssessmentRuns"
}
export declare class DescribeReplicationTaskAssessmentRunsRequest extends SpeakeasyBase {
    describeReplicationTaskAssessmentRunsMessage: shared.DescribeReplicationTaskAssessmentRunsMessage;
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
    xAmzTarget: DescribeReplicationTaskAssessmentRunsXAmzTargetEnum;
}
export declare class DescribeReplicationTaskAssessmentRunsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeReplicationTaskAssessmentRunsResponse?: shared.DescribeReplicationTaskAssessmentRunsResponse;
    /**
     * ResourceNotFoundFault
     */
    resourceNotFoundFault?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
