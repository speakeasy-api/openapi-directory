import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeFleetAdvisorSchemaObjectSummaryXAmzTargetEnum {
    AmazonDMSv20160101DescribeFleetAdvisorSchemaObjectSummary = "AmazonDMSv20160101.DescribeFleetAdvisorSchemaObjectSummary"
}
export declare class DescribeFleetAdvisorSchemaObjectSummaryRequest extends SpeakeasyBase {
    describeFleetAdvisorSchemaObjectSummaryRequest: shared.DescribeFleetAdvisorSchemaObjectSummaryRequest;
    /**
     * Pagination limit
     */
    maxRecords?: string;
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
    xAmzTarget: DescribeFleetAdvisorSchemaObjectSummaryXAmzTargetEnum;
}
export declare class DescribeFleetAdvisorSchemaObjectSummaryResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeFleetAdvisorSchemaObjectSummaryResponse?: shared.DescribeFleetAdvisorSchemaObjectSummaryResponse;
    /**
     * InvalidResourceStateFault
     */
    invalidResourceStateFault?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
