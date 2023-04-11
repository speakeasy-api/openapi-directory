import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateUserXAmzTargetEnum {
    AmazonMemoryDBUpdateUser = "AmazonMemoryDB.UpdateUser"
}
export declare class UpdateUserRequest extends SpeakeasyBase {
    updateUserRequest: shared.UpdateUserRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateUserXAmzTargetEnum;
}
export declare class UpdateUserResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidParameterCombinationException
     */
    invalidParameterCombinationException?: any;
    /**
     * InvalidParameterValueException
     */
    invalidParameterValueException?: any;
    /**
     * InvalidUserStateFault
     */
    invalidUserStateFault?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateUserResponse?: shared.UpdateUserResponse;
    /**
     * UserNotFoundFault
     */
    userNotFoundFault?: any;
}
