import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Contains information about a platform that a component supports.
 */
export declare class ResolveComponentCandidatesRequestBodyPlatform extends SpeakeasyBase {
    attributes?: Record<string, string>;
    name?: string;
}
export declare class ResolveComponentCandidatesRequestBody extends SpeakeasyBase {
    /**
     * The list of components to resolve.
     */
    componentCandidates?: shared.ComponentCandidate[];
    /**
     * Contains information about a platform that a component supports.
     */
    platform?: ResolveComponentCandidatesRequestBodyPlatform;
}
export declare class ResolveComponentCandidatesRequest extends SpeakeasyBase {
    requestBody: ResolveComponentCandidatesRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ResolveComponentCandidatesResponse extends SpeakeasyBase {
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
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * Success
     */
    resolveComponentCandidatesResponse?: shared.ResolveComponentCandidatesResponse;
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
    /**
     * ValidationException
     */
    validationException?: any;
}
