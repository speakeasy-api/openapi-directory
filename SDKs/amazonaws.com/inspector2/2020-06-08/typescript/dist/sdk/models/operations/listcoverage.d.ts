import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * A structure that identifies filter criteria for <code>GetCoverageStatistics</code>.
 */
export declare class ListCoverageRequestBodyFilterCriteria extends SpeakeasyBase {
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
export declare class ListCoverageRequestBody extends SpeakeasyBase {
    /**
     * A structure that identifies filter criteria for <code>GetCoverageStatistics</code>.
     */
    filterCriteria?: ListCoverageRequestBodyFilterCriteria;
    /**
     * The maximum number of results to return in the response.
     */
    maxResults?: number;
    /**
     * A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. For subsequent calls, use the <code>NextToken</code> value returned from the previous request to continue listing results after the first page.
     */
    nextToken?: string;
}
export declare class ListCoverageRequest extends SpeakeasyBase {
    requestBody: ListCoverageRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class ListCoverageResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * Success
     */
    listCoverageResponse?: shared.ListCoverageResponse;
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
