import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum RequestUploadCredentialsXAmzTargetEnum {
    GameLiftRequestUploadCredentials = "GameLift.RequestUploadCredentials"
}
export declare class RequestUploadCredentialsRequest extends SpeakeasyBase {
    requestUploadCredentialsInput: shared.RequestUploadCredentialsInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RequestUploadCredentialsXAmzTargetEnum;
}
export declare class RequestUploadCredentialsResponse extends SpeakeasyBase {
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
     * Success
     */
    requestUploadCredentialsOutput?: shared.RequestUploadCredentialsOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnauthorizedException
     */
    unauthorizedException?: any;
}
