import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ClaimGameServerXAmzTargetEnum {
    GameLiftClaimGameServer = "GameLift.ClaimGameServer"
}
export declare class ClaimGameServerRequest extends SpeakeasyBase {
    claimGameServerInput: shared.ClaimGameServerInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ClaimGameServerXAmzTargetEnum;
}
export declare class ClaimGameServerResponse extends SpeakeasyBase {
    /**
     * Success
     */
    claimGameServerOutput?: shared.ClaimGameServerOutput;
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * InternalServiceException
     */
    internalServiceException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    /**
     * OutOfCapacityException
     */
    outOfCapacityException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnauthorizedException
     */
    unauthorizedException?: any;
}
