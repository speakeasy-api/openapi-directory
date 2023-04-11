import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateLocationXAmzTargetEnum {
    GameLiftCreateLocation = "GameLift.CreateLocation"
}
export declare class CreateLocationRequest extends SpeakeasyBase {
    createLocationInput: shared.CreateLocationInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateLocationXAmzTargetEnum;
}
export declare class CreateLocationResponse extends SpeakeasyBase {
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * Success
     */
    createLocationOutput?: shared.CreateLocationOutput;
    /**
     * InternalServiceException
     */
    internalServiceException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TaggingFailedException
     */
    taggingFailedException?: any;
    /**
     * UnauthorizedException
     */
    unauthorizedException?: any;
}
