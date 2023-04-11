import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteUserProfileXAmzTargetEnum {
    CodeStar20170419DeleteUserProfile = "CodeStar_20170419.DeleteUserProfile"
}
export declare class DeleteUserProfileRequest extends SpeakeasyBase {
    deleteUserProfileRequest: shared.DeleteUserProfileRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteUserProfileXAmzTargetEnum;
}
export declare class DeleteUserProfileResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteUserProfileResult?: shared.DeleteUserProfileResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
