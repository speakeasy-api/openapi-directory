import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * A structure that identifies filter criteria for <code>GetCoverageStatistics</code>.
 */
export declare class ListCoverageStatisticsRequestBodyFilterCriteria extends SpeakeasyBase {
    accountId?: shared.CoverageStringFilter[];
    ec2InstanceTags?: shared.CoverageMapFilter[];
    ecrImageTags?: shared.CoverageStringFilter[];
    ecrRepositoryName?: shared.CoverageStringFilter[];
    lambdaFunctionName?: shared.CoverageStringFilter[];
    lambdaFunctionRuntime?: shared.CoverageStringFilter[];
    lambdaFunctionTags?: shared.CoverageMapFilter[];
    resourceId?: shared.CoverageStringFilter[];
    resourceType?: shared.CoverageStringFilter[];
    scanStatusCode?: shared.CoverageStringFilter[];
    scanStatusReason?: shared.CoverageStringFilter[];
    scanType?: shared.CoverageStringFilter[];
}
/**
 * The value to group the results by.
 */
export declare enum ListCoverageStatisticsRequestBodyGroupByEnum {
    ScanStatusCode = "SCAN_STATUS_CODE",
    ScanStatusReason = "SCAN_STATUS_REASON",
    AccountId = "ACCOUNT_ID",
    ResourceType = "RESOURCE_TYPE",
    EcrRepositoryName = "ECR_REPOSITORY_NAME"
}
export declare class ListCoverageStatisticsRequestBody extends SpeakeasyBase {
    /**
     * A structure that identifies filter criteria for <code>GetCoverageStatistics</code>.
     */
    filterCriteria?: ListCoverageStatisticsRequestBodyFilterCriteria;
    /**
     * The value to group the results by.
     */
    groupBy?: ListCoverageStatisticsRequestBodyGroupByEnum;
    /**
     * A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. For subsequent calls, use the <code>NextToken</code> value returned from the previous request to continue listing results after the first page.
     */
    nextToken?: string;
}
export declare class ListCoverageStatisticsRequest extends SpeakeasyBase {
    requestBody: ListCoverageStatisticsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class ListCoverageStatisticsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * Success
     */
    listCoverageStatisticsResponse?: shared.ListCoverageStatisticsResponse;
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
