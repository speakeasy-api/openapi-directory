import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeregisterOrganizationDelegatedAdminXAmzTargetEnum {
    ComAmazonawsCloudtrailV20131101CloudTrail20131101DeregisterOrganizationDelegatedAdmin = "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeregisterOrganizationDelegatedAdmin"
}
export declare class DeregisterOrganizationDelegatedAdminRequest extends SpeakeasyBase {
    deregisterOrganizationDelegatedAdminRequest: shared.DeregisterOrganizationDelegatedAdminRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeregisterOrganizationDelegatedAdminXAmzTargetEnum;
}
export declare class DeregisterOrganizationDelegatedAdminResponse extends SpeakeasyBase {
    /**
     * AccountNotFoundException
     */
    accountNotFoundException?: any;
    /**
     * AccountNotRegisteredException
     */
    accountNotRegisteredException?: any;
    /**
     * CloudTrailAccessNotEnabledException
     */
    cloudTrailAccessNotEnabledException?: any;
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * Success
     */
    deregisterOrganizationDelegatedAdminResponse?: Record<string, any>;
    /**
     * InsufficientDependencyServiceAccessPermissionException
     */
    insufficientDependencyServiceAccessPermissionException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * NotOrganizationManagementAccountException
     */
    notOrganizationManagementAccountException?: any;
    /**
     * OperationNotPermittedException
     */
    operationNotPermittedException?: any;
    /**
     * OrganizationNotInAllFeaturesModeException
     */
    organizationNotInAllFeaturesModeException?: any;
    /**
     * OrganizationsNotInUseException
     */
    organizationsNotInUseException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnsupportedOperationException
     */
    unsupportedOperationException?: any;
}
