import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateACLXAmzTargetEnum {
    AmazonMemoryDBUpdateACL = "AmazonMemoryDB.UpdateACL"
}
export declare class UpdateACLRequest extends SpeakeasyBase {
    updateACLRequest: shared.UpdateACLRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateACLXAmzTargetEnum;
}
export declare class UpdateACLResponse extends SpeakeasyBase {
    /**
     * ACLNotFoundFault
     */
    aclNotFoundFault?: any;
    contentType: string;
    /**
     * DefaultUserRequired
     */
    defaultUserRequired?: any;
    /**
     * DuplicateUserNameFault
     */
    duplicateUserNameFault?: any;
    /**
     * InvalidACLStateFault
     */
    invalidACLStateFault?: any;
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
     * Success
     */
    updateACLResponse?: shared.UpdateACLResponse;
    /**
     * UserNotFoundFault
     */
    userNotFoundFault?: any;
}
