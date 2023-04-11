import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateUserProfileXAmzTargetEnum {
    SageMakerCreateUserProfile = "SageMaker.CreateUserProfile"
}
export declare class CreateUserProfileRequest extends SpeakeasyBase {
    createUserProfileRequest: shared.CreateUserProfileRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateUserProfileXAmzTargetEnum;
}
export declare class CreateUserProfileResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createUserProfileResponse?: shared.CreateUserProfileResponse;
    /**
     * ResourceInUse
     */
    resourceInUse?: any;
    /**
     * ResourceLimitExceeded
     */
    resourceLimitExceeded?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
