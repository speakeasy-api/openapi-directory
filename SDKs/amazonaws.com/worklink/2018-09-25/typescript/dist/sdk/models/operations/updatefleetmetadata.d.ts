import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateFleetMetadataRequestBody extends SpeakeasyBase {
    /**
     * The fleet name to display. The existing DisplayName is unset if null is passed.
     */
    displayName?: string;
    /**
     * The ARN of the fleet.
     */
    fleetArn: string;
    /**
     * The option to optimize for better performance by routing traffic through the closest AWS Region to users, which may be outside of your home Region.
     */
    optimizeForEndUserLocation?: boolean;
}
export declare class UpdateFleetMetadataRequest extends SpeakeasyBase {
    requestBody: UpdateFleetMetadataRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateFleetMetadataResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerErrorException
     */
    internalServerErrorException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
    /**
     * UnauthorizedException
     */
    unauthorizedException?: any;
    /**
     * Success
     */
    updateFleetMetadataResponse?: Record<string, any>;
}
