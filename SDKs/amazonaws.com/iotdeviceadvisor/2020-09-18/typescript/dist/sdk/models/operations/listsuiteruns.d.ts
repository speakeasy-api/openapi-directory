import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListSuiteRunsRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The maximum number of results to return at once.
     */
    maxResults?: number;
    /**
     * A token to retrieve the next set of results.
     */
    nextToken?: string;
    /**
     * Lists the test suite runs of the specified test suite based on suite definition ID.
     */
    suiteDefinitionId?: string;
    /**
     * Must be passed along with <code>suiteDefinitionId</code>. Lists the test suite runs of the specified test suite based on suite definition version.
     */
    suiteDefinitionVersion?: string;
}
export declare class ListSuiteRunsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * Success
     */
    listSuiteRunsResponse?: shared.ListSuiteRunsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
