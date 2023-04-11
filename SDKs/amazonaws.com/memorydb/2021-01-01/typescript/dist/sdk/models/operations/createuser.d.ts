import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateUserXAmzTargetEnum {
    AmazonMemoryDBCreateUser = "AmazonMemoryDB.CreateUser"
}
export declare class CreateUserRequest extends SpeakeasyBase {
    createUserRequest: shared.CreateUserRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateUserXAmzTargetEnum;
}
export declare class CreateUserResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createUserResponse?: shared.CreateUserResponse;
    /**
     * DuplicateUserNameFault
     */
    duplicateUserNameFault?: any;
    /**
     * InvalidParameterCombinationException
     */
    invalidParameterCombinationException?: any;
    /**
     * InvalidParameterValueException
     */
    invalidParameterValueException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TagQuotaPerResourceExceeded
     */
    tagQuotaPerResourceExceeded?: any;
    /**
     * UserAlreadyExistsFault
     */
    userAlreadyExistsFault?: any;
    /**
     * UserQuotaExceededFault
     */
    userQuotaExceededFault?: any;
}
