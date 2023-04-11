import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateFleetLocationsXAmzTargetEnum {
    GameLiftCreateFleetLocations = "GameLift.CreateFleetLocations"
}
export declare class CreateFleetLocationsRequest extends SpeakeasyBase {
    createFleetLocationsInput: shared.CreateFleetLocationsInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateFleetLocationsXAmzTargetEnum;
}
export declare class CreateFleetLocationsResponse extends SpeakeasyBase {
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * Success
     */
    createFleetLocationsOutput?: shared.CreateFleetLocationsOutput;
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
     * UnsupportedRegionException
     */
    unsupportedRegionException?: any;
}
