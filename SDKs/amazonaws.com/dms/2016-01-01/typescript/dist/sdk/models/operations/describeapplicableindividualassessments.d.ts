import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeApplicableIndividualAssessmentsXAmzTargetEnum {
    AmazonDMSv20160101DescribeApplicableIndividualAssessments = "AmazonDMSv20160101.DescribeApplicableIndividualAssessments"
}
export declare class DescribeApplicableIndividualAssessmentsRequest extends SpeakeasyBase {
    describeApplicableIndividualAssessmentsMessage: shared.DescribeApplicableIndividualAssessmentsMessage;
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
    xAmzTarget: DescribeApplicableIndividualAssessmentsXAmzTargetEnum;
}
export declare class DescribeApplicableIndividualAssessmentsResponse extends SpeakeasyBase {
    /**
     * AccessDeniedFault
     */
    accessDeniedFault?: any;
    contentType: string;
    /**
     * Success
     */
    describeApplicableIndividualAssessmentsResponse?: shared.DescribeApplicableIndividualAssessmentsResponse;
    /**
     * InvalidResourceStateFault
     */
    invalidResourceStateFault?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundFault
     */
    resourceNotFoundFault?: any;
}
