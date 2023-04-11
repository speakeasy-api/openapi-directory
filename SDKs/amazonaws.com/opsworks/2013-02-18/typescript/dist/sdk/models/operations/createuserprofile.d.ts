import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateUserProfileXAmzTargetEnum {
    OpsWorks20130218CreateUserProfile = "OpsWorks_20130218.CreateUserProfile"
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
     * ValidationException
     */
    validationException?: any;
}
