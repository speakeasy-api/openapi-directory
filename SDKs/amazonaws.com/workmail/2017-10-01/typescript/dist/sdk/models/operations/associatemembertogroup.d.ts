import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AssociateMemberToGroupXAmzTargetEnum {
    WorkMailServiceAssociateMemberToGroup = "WorkMailService.AssociateMemberToGroup"
}
export declare class AssociateMemberToGroupRequest extends SpeakeasyBase {
    associateMemberToGroupRequest: shared.AssociateMemberToGroupRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AssociateMemberToGroupXAmzTargetEnum;
}
export declare class AssociateMemberToGroupResponse extends SpeakeasyBase {
    /**
     * Success
     */
    associateMemberToGroupResponse?: Record<string, any>;
    contentType: string;
    /**
     * DirectoryServiceAuthenticationFailedException
     */
    directoryServiceAuthenticationFailedException?: any;
    /**
     * DirectoryUnavailableException
     */
    directoryUnavailableException?: any;
    /**
     * EntityNotFoundException
     */
    entityNotFoundException?: any;
    /**
     * EntityStateException
     */
    entityStateException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * OrganizationNotFoundException
     */
    organizationNotFoundException?: any;
    /**
     * OrganizationStateException
     */
    organizationStateException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnsupportedOperationException
     */
    unsupportedOperationException?: any;
}
