import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListApplicationsRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The maximum number of applications that can be listed.
     */
    maxResults?: number;
    /**
     * The token for the next set of application results.
     */
    nextToken?: string;
    /**
     * An optional filter for application states. Note that if this filter contains multiple states, the resulting list will be grouped by the state.
     */
    states?: shared.ApplicationStateEnum[];
}
export declare class ListApplicationsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * Success
     */
    listApplicationsResponse?: shared.ListApplicationsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
