import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateFleetRequestBody extends SpeakeasyBase {
    /**
     * The fleet name to display.
     */
    displayName?: string;
    /**
     * A unique name for the fleet.
     */
    fleetName: string;
    /**
     * The option to optimize for better performance by routing traffic through the closest AWS Region to users, which may be outside of your home Region.
     */
    optimizeForEndUserLocation?: boolean;
    /**
     *  The tags to add to the resource. A tag is a key-value pair.
     */
    tags?: Record<string, string>;
}
export declare class CreateFleetRequest extends SpeakeasyBase {
    requestBody: CreateFleetRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateFleetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createFleetResponse?: shared.CreateFleetResponse;
    /**
     * InternalServerErrorException
     */
    internalServerErrorException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * ResourceAlreadyExistsException
     */
    resourceAlreadyExistsException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
    /**
     * UnauthorizedException
     */
    unauthorizedException?: any;
}
