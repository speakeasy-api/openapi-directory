import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Specifies whether to return information about launches or experiments that use this segment.
 */
export declare enum ListSegmentReferencesTypeEnum {
    Experiment = "EXPERIMENT",
    Launch = "LAUNCH"
}
export declare class ListSegmentReferencesRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The maximum number of results to include in the response. If you omit this, the default of 50 is used.
     */
    maxResults?: number;
    /**
     * The token to use when requesting the next set of results. You received this token from a previous <code>ListSegmentReferences</code> operation.
     */
    nextToken?: string;
    /**
     * The ARN of the segment that you want to view information for.
     */
    segment: string;
    /**
     * Specifies whether to return information about launches or experiments that use this segment.
     */
    type: ListSegmentReferencesTypeEnum;
}
export declare class ListSegmentReferencesResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    listSegmentReferencesResponse?: shared.ListSegmentReferencesResponse;
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
     * ValidationException
     */
    validationException?: any;
}
