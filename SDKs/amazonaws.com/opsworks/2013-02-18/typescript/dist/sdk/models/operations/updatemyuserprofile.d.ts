import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateMyUserProfileXAmzTargetEnum {
    OpsWorks20130218UpdateMyUserProfile = "OpsWorks_20130218.UpdateMyUserProfile"
}
export declare class UpdateMyUserProfileRequest extends SpeakeasyBase {
    updateMyUserProfileRequest: shared.UpdateMyUserProfileRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateMyUserProfileXAmzTargetEnum;
}
export declare class UpdateMyUserProfileResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
