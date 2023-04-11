import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeReplicationTaskIndividualAssessmentsXAmzTargetEnum {
    AmazonDMSv20160101DescribeReplicationTaskIndividualAssessments = "AmazonDMSv20160101.DescribeReplicationTaskIndividualAssessments"
}
export declare class DescribeReplicationTaskIndividualAssessmentsRequest extends SpeakeasyBase {
    describeReplicationTaskIndividualAssessmentsMessage: shared.DescribeReplicationTaskIndividualAssessmentsMessage;
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
    xAmzTarget: DescribeReplicationTaskIndividualAssessmentsXAmzTargetEnum;
}
export declare class DescribeReplicationTaskIndividualAssessmentsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeReplicationTaskIndividualAssessmentsResponse?: shared.DescribeReplicationTaskIndividualAssessmentsResponse;
    /**
     * ResourceNotFoundFault
     */
    resourceNotFoundFault?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
