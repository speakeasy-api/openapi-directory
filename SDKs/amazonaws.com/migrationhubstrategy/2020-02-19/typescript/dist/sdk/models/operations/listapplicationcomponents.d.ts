import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 *  Criteria for filtering the list of application components.
 */
export declare enum ListApplicationComponentsRequestBodyApplicationComponentCriteriaEnum {
    NotDefined = "NOT_DEFINED",
    AppName = "APP_NAME",
    ServerId = "SERVER_ID",
    AppType = "APP_TYPE",
    Strategy = "STRATEGY",
    Destination = "DESTINATION",
    AnalysisStatus = "ANALYSIS_STATUS",
    ErrorCategory = "ERROR_CATEGORY"
}
/**
 *  Specifies whether to sort by ascending (<code>ASC</code>) or descending (<code>DESC</code>) order.
 */
export declare enum ListApplicationComponentsRequestBodySortEnum {
    Asc = "ASC",
    Desc = "DESC"
}
export declare class ListApplicationComponentsRequestBody extends SpeakeasyBase {
    /**
     *  Criteria for filtering the list of application components.
     */
    applicationComponentCriteria?: ListApplicationComponentsRequestBodyApplicationComponentCriteriaEnum;
    /**
     *  Specify the value based on the application component criteria type. For example, if <code>applicationComponentCriteria</code> is set to <code>SERVER_ID</code> and <code>filterValue</code> is set to <code>server1</code>, then <a>ListApplicationComponents</a> returns all the application components running on server1.
     */
    filterValue?: string;
    /**
     *  The group ID specified in to filter on.
     */
    groupIdFilter?: shared.Group[];
    /**
     *  The maximum number of items to include in the response. The maximum value is 100.
     */
    maxResults?: number;
    /**
     *  The token from a previous call that you use to retrieve the next set of results. For example, if a previous call to this action returned 100 items, but you set <code>maxResults</code> to 10. You'll receive a set of 10 results along with a token. You then use the returned token to retrieve the next set of 10.
     */
    nextToken?: string;
    /**
     *  Specifies whether to sort by ascending (<code>ASC</code>) or descending (<code>DESC</code>) order.
     */
    sort?: ListApplicationComponentsRequestBodySortEnum;
}
export declare class ListApplicationComponentsRequest extends SpeakeasyBase {
    requestBody: ListApplicationComponentsRequestBody;
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
export declare class ListApplicationComponentsResponse extends SpeakeasyBase {
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
    listApplicationComponentsResponse?: shared.ListApplicationComponentsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceLinkedRoleLockClientException
     */
    serviceLinkedRoleLockClientException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
