import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetComplianceSummaryXAmzTargetEnum {
    ResourceGroupsTaggingAPI20170126GetComplianceSummary = "ResourceGroupsTaggingAPI_20170126.GetComplianceSummary"
}
export declare class GetComplianceSummaryRequest extends SpeakeasyBase {
    getComplianceSummaryInput: shared.GetComplianceSummaryInput;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    paginationToken?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetComplianceSummaryXAmzTargetEnum;
}
export declare class GetComplianceSummaryResponse extends SpeakeasyBase {
    /**
     * ConstraintViolationException
     */
    constraintViolationException?: any;
    contentType: string;
    /**
     * Success
     */
    getComplianceSummaryOutput?: shared.GetComplianceSummaryOutput;
    /**
     * InternalServiceException
     */
    internalServiceException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottledException
     */
    throttledException?: any;
}
