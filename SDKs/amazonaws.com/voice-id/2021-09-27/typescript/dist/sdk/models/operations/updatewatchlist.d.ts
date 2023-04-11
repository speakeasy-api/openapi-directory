import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateWatchlistXAmzTargetEnum {
    VoiceIDUpdateWatchlist = "VoiceID.UpdateWatchlist"
}
export declare class UpdateWatchlistRequest extends SpeakeasyBase {
    updateWatchlistRequest: shared.UpdateWatchlistRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateWatchlistXAmzTargetEnum;
}
export declare class UpdateWatchlistResponse extends SpeakeasyBase {
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
    updateWatchlistResponse?: shared.UpdateWatchlistResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
