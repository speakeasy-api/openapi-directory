import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateACLXAmzTargetEnum {
    AmazonMemoryDBCreateACL = "AmazonMemoryDB.CreateACL"
}
export declare class CreateACLRequest extends SpeakeasyBase {
    createACLRequest: shared.CreateACLRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateACLXAmzTargetEnum;
}
export declare class CreateACLResponse extends SpeakeasyBase {
    /**
     * ACLAlreadyExistsFault
     */
    aclAlreadyExistsFault?: any;
    /**
     * ACLQuotaExceededFault
     */
    aclQuotaExceededFault?: any;
    contentType: string;
    /**
     * Success
     */
    createACLResponse?: shared.CreateACLResponse;
    /**
     * DefaultUserRequired
     */
    defaultUserRequired?: any;
    /**
     * DuplicateUserNameFault
     */
    duplicateUserNameFault?: any;
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
     * UserNotFoundFault
     */
    userNotFoundFault?: any;
}
