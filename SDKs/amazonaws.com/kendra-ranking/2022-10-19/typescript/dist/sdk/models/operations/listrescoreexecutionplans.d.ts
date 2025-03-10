import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListRescoreExecutionPlansXAmzTargetEnum {
    AWSKendraRerankingFrontendServiceListRescoreExecutionPlans = "AWSKendraRerankingFrontendService.ListRescoreExecutionPlans"
}
export declare class ListRescoreExecutionPlansRequest extends SpeakeasyBase {
    listRescoreExecutionPlansRequest: shared.ListRescoreExecutionPlansRequest;
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
    xAmzTarget: ListRescoreExecutionPlansXAmzTargetEnum;
}
export declare class ListRescoreExecutionPlansResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * Success
     */
    listRescoreExecutionPlansResponse?: shared.ListRescoreExecutionPlansResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
