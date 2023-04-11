import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListLaunchProfilesRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The max number of results to return in the response.
     */
    maxResults?: number;
    /**
     * The token for the next set of results, or null if there are no more results.
     */
    nextToken?: string;
    /**
     * The principal ID. This currently supports a IAM Identity Center UserId.
     */
    principalId?: string;
    /**
     * Filter this request to launch profiles in any of the given states.
     */
    states?: shared.LaunchProfileStateEnum[];
    /**
     * The studio ID.
     */
    studioId: string;
}
export declare class ListLaunchProfilesResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * InternalServerErrorException
     */
    internalServerErrorException?: any;
    /**
     * Success
     */
    listLaunchProfilesResponse?: shared.ListLaunchProfilesResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
