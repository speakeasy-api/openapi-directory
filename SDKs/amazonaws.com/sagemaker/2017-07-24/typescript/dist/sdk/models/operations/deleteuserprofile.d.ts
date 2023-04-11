import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteUserProfileXAmzTargetEnum {
    SageMakerDeleteUserProfile = "SageMaker.DeleteUserProfile"
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
     * ResourceInUse
     */
    resourceInUse?: any;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
