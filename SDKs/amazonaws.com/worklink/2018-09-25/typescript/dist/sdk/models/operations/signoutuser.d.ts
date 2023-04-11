import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SignOutUserRequestBody extends SpeakeasyBase {
    /**
     * The ARN of the fleet.
     */
    fleetArn: string;
    /**
     * The name of the user.
     */
    username: string;
}
export declare class SignOutUserRequest extends SpeakeasyBase {
    requestBody: SignOutUserRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class SignOutUserResponse extends SpeakeasyBase {
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
    /**
     * Success
     */
    signOutUserResponse?: Record<string, any>;
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
}
