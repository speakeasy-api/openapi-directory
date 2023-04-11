import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateGroupXAmzTargetEnum {
    WorkMailServiceCreateGroup = "WorkMailService.CreateGroup"
}
export declare class CreateGroupRequest extends SpeakeasyBase {
    createGroupRequest: shared.CreateGroupRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateGroupXAmzTargetEnum;
}
export declare class CreateGroupResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createGroupResponse?: shared.CreateGroupResponse;
    /**
     * DirectoryServiceAuthenticationFailedException
     */
    directoryServiceAuthenticationFailedException?: any;
    /**
     * DirectoryUnavailableException
     */
    directoryUnavailableException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * NameAvailabilityException
     */
    nameAvailabilityException?: any;
    /**
     * OrganizationNotFoundException
     */
    organizationNotFoundException?: any;
    /**
     * OrganizationStateException
     */
    organizationStateException?: any;
    /**
     * ReservedNameException
     */
    reservedNameException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnsupportedOperationException
     */
    unsupportedOperationException?: any;
}
