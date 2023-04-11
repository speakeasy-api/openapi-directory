import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateFleetAttributesXAmzTargetEnum {
    GameLiftUpdateFleetAttributes = "GameLift.UpdateFleetAttributes"
}
export declare class UpdateFleetAttributesRequest extends SpeakeasyBase {
    updateFleetAttributesInput: shared.UpdateFleetAttributesInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateFleetAttributesXAmzTargetEnum;
}
export declare class UpdateFleetAttributesResponse extends SpeakeasyBase {
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
     * InvalidFleetStatusException
     */
    invalidFleetStatusException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnauthorizedException
     */
    unauthorizedException?: any;
    /**
     * Success
     */
    updateFleetAttributesOutput?: shared.UpdateFleetAttributesOutput;
}
