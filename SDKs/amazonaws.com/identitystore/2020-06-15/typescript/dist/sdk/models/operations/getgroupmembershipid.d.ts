import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetGroupMembershipIdXAmzTargetEnum {
    AWSIdentityStoreGetGroupMembershipId = "AWSIdentityStore.GetGroupMembershipId"
}
export declare class GetGroupMembershipIdRequest extends SpeakeasyBase {
    getGroupMembershipIdRequest: shared.GetGroupMembershipIdRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetGroupMembershipIdXAmzTargetEnum;
}
export declare class GetGroupMembershipIdResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    getGroupMembershipIdResponse?: shared.GetGroupMembershipIdResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
