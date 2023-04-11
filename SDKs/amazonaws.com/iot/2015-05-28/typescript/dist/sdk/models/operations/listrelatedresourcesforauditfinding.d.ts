import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListRelatedResourcesForAuditFindingRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The finding Id.
     */
    findingId: string;
    /**
     * The maximum number of results to return at one time.
     */
    maxResults?: number;
    /**
     * A token that can be used to retrieve the next set of results, or <code>null</code> if there are no additional results.
     */
    nextToken?: string;
}
export declare class ListRelatedResourcesForAuditFindingResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * Success
     */
    listRelatedResourcesForAuditFindingResponse?: shared.ListRelatedResourcesForAuditFindingResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
