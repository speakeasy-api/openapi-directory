import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListComplianceSummariesXAmzTargetEnum {
    AmazonSSMListComplianceSummaries = "AmazonSSM.ListComplianceSummaries"
}
export declare class ListComplianceSummariesRequest extends SpeakeasyBase {
    listComplianceSummariesRequest: shared.ListComplianceSummariesRequest;
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
    xAmzTarget: ListComplianceSummariesXAmzTargetEnum;
}
export declare class ListComplianceSummariesResponse extends SpeakeasyBase {
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
    listComplianceSummariesResult?: shared.ListComplianceSummariesResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
