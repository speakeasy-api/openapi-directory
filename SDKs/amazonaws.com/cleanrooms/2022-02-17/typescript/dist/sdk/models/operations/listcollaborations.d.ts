import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The caller's status in a collaboration.
 */
export declare enum ListCollaborationsMemberStatusEnum {
    Invited = "INVITED",
    Active = "ACTIVE"
}
export declare class ListCollaborationsRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The maximum size of the results that is returned per call. Service chooses a default if it has not been set. Service may return a nextToken even if the maximum results has not been met.
     */
    maxResults?: number;
    /**
     * The caller's status in a collaboration.
     */
    memberStatus?: ListCollaborationsMemberStatusEnum;
    /**
     * The token value retrieved from a previous call to access the next page of results.
     */
    nextToken?: string;
}
export declare class ListCollaborationsResponse extends SpeakeasyBase {
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
    listCollaborationsOutput?: shared.ListCollaborationsOutput;
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
