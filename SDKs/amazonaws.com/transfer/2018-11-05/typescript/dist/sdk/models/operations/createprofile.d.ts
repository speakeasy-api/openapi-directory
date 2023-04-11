import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateProfileXAmzTargetEnum {
    TransferServiceCreateProfile = "TransferService.CreateProfile"
}
export declare class CreateProfileRequest extends SpeakeasyBase {
    createProfileRequest: shared.CreateProfileRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateProfileXAmzTargetEnum;
}
export declare class CreateProfileResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createProfileResponse?: shared.CreateProfileResponse;
    /**
     * InternalServiceError
     */
    internalServiceError?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
