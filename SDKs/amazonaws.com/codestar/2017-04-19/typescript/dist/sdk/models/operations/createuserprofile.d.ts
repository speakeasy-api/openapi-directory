import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateUserProfileXAmzTargetEnum {
    CodeStar20170419CreateUserProfile = "CodeStar_20170419.CreateUserProfile"
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
    createUserProfileResult?: shared.CreateUserProfileResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UserProfileAlreadyExistsException
     */
    userProfileAlreadyExistsException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
