import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * How the auto-merging process should resolve conflicts between different profiles.
 */
export declare class GetAutoMergingPreviewRequestBodyConflictResolution extends SpeakeasyBase {
    conflictResolvingModel?: shared.ConflictResolvingModelEnum;
    sourceName?: string;
}
/**
 * The matching criteria to be used during the auto-merging process.
 */
export declare class GetAutoMergingPreviewRequestBodyConsolidation extends SpeakeasyBase {
    matchingAttributesList?: string[][];
}
export declare class GetAutoMergingPreviewRequestBody extends SpeakeasyBase {
    /**
     * How the auto-merging process should resolve conflicts between different profiles.
     */
    conflictResolution: GetAutoMergingPreviewRequestBodyConflictResolution;
    /**
     * The matching criteria to be used during the auto-merging process.
     */
    consolidation: GetAutoMergingPreviewRequestBodyConsolidation;
    /**
     * Minimum confidence score required for profiles within a matching group to be merged during the auto-merge process.
     */
    minAllowedConfidenceScoreForMerging?: number;
}
export declare class GetAutoMergingPreviewRequest extends SpeakeasyBase {
    /**
     * The unique name of the domain.
     */
    domainName: string;
    requestBody: GetAutoMergingPreviewRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetAutoMergingPreviewResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * Success
     */
    getAutoMergingPreviewResponse?: shared.GetAutoMergingPreviewResponse;
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
}
