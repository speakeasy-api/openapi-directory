import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateLensReviewRequestBody extends SpeakeasyBase {
    /**
     * The notes associated with the workload.
     */
    lensNotes?: string;
    /**
     * List of pillar notes of a lens review in a workload.
     */
    pillarNotes?: Record<string, string>;
}
export declare class UpdateLensReviewRequest extends SpeakeasyBase {
    lensAlias: string;
    requestBody: UpdateLensReviewRequestBody;
    workloadId: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateLensReviewResponse extends SpeakeasyBase {
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
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * Success
     */
    updateLensReviewOutput?: shared.UpdateLensReviewOutput;
    /**
     * ValidationException
     */
    validationException?: any;
}
