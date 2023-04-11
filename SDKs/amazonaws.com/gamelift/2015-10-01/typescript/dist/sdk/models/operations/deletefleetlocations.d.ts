import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteFleetLocationsXAmzTargetEnum {
    GameLiftDeleteFleetLocations = "GameLift.DeleteFleetLocations"
}
export declare class DeleteFleetLocationsRequest extends SpeakeasyBase {
    deleteFleetLocationsInput: shared.DeleteFleetLocationsInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteFleetLocationsXAmzTargetEnum;
}
export declare class DeleteFleetLocationsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteFleetLocationsOutput?: shared.DeleteFleetLocationsOutput;
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
