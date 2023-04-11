import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListSlackWorkspaceConfigurationsRequestBody extends SpeakeasyBase {
    /**
     * If the results of a search are large, the API only returns a portion of the results and includes a <code>nextToken</code> pagination token in the response. To retrieve the next batch of results, reissue the search request and include the returned token. When the API returns the last set of results, the response doesn't include a pagination token value.
     */
    nextToken?: string;
}
export declare class ListSlackWorkspaceConfigurationsRequest extends SpeakeasyBase {
    requestBody: ListSlackWorkspaceConfigurationsRequestBody;
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
export declare class ListSlackWorkspaceConfigurationsResponse extends SpeakeasyBase {
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
    listSlackWorkspaceConfigurationsResult?: shared.ListSlackWorkspaceConfigurationsResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
