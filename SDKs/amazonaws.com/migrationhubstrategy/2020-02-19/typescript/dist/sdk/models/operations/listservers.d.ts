import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 *  Criteria for filtering servers.
 */
export declare enum ListServersRequestBodyServerCriteriaEnum {
    NotDefined = "NOT_DEFINED",
    OsName = "OS_NAME",
    Strategy = "STRATEGY",
    Destination = "DESTINATION",
    ServerId = "SERVER_ID",
    AnalysisStatus = "ANALYSIS_STATUS",
    ErrorCategory = "ERROR_CATEGORY"
}
/**
 *  Specifies whether to sort by ascending (<code>ASC</code>) or descending (<code>DESC</code>) order.
 */
export declare enum ListServersRequestBodySortEnum {
    Asc = "ASC",
    Desc = "DESC"
}
export declare class ListServersRequestBody extends SpeakeasyBase {
    /**
     *  Specifies the filter value, which is based on the type of server criteria. For example, if <code>serverCriteria</code> is <code>OS_NAME</code>, and the <code>filterValue</code> is equal to <code>WindowsServer</code>, then <code>ListServers</code> returns all of the servers matching the OS name <code>WindowsServer</code>.
     */
    filterValue?: string;
    /**
     *  Specifies the group ID to filter on.
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
     *  Criteria for filtering servers.
     */
    serverCriteria?: ListServersRequestBodyServerCriteriaEnum;
    /**
     *  Specifies whether to sort by ascending (<code>ASC</code>) or descending (<code>DESC</code>) order.
     */
    sort?: ListServersRequestBodySortEnum;
}
export declare class ListServersRequest extends SpeakeasyBase {
    requestBody: ListServersRequestBody;
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
export declare class ListServersResponse extends SpeakeasyBase {
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
    listServersResponse?: shared.ListServersResponse;
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
