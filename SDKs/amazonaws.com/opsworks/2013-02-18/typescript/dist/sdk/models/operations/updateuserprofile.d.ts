import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateUserProfileXAmzTargetEnum {
    OpsWorks20130218UpdateUserProfile = "OpsWorks_20130218.UpdateUserProfile"
}
export declare class UpdateUserProfileRequest extends SpeakeasyBase {
    updateUserProfileRequest: shared.UpdateUserProfileRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateUserProfileXAmzTargetEnum;
}
export declare class UpdateUserProfileResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
