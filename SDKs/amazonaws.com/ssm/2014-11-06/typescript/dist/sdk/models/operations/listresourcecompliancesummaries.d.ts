import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListResourceComplianceSummariesXAmzTargetEnum {
    AmazonSSMListResourceComplianceSummaries = "AmazonSSM.ListResourceComplianceSummaries"
}
export declare class ListResourceComplianceSummariesRequest extends SpeakeasyBase {
    listResourceComplianceSummariesRequest: shared.ListResourceComplianceSummariesRequest;
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
    xAmzTarget: ListResourceComplianceSummariesXAmzTargetEnum;
}
export declare class ListResourceComplianceSummariesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * InvalidFilter
     */
    invalidFilter?: any;
    /**
     * InvalidNextToken
     */
    invalidNextToken?: any;
    /**
     * Success
     */
    listResourceComplianceSummariesResult?: shared.ListResourceComplianceSummariesResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
