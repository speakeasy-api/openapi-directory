import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum RegisterOrganizationDelegatedAdminXAmzTargetEnum {
    ComAmazonawsCloudtrailV20131101CloudTrail20131101RegisterOrganizationDelegatedAdmin = "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.RegisterOrganizationDelegatedAdmin"
}
export declare class RegisterOrganizationDelegatedAdminRequest extends SpeakeasyBase {
    registerOrganizationDelegatedAdminRequest: shared.RegisterOrganizationDelegatedAdminRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RegisterOrganizationDelegatedAdminXAmzTargetEnum;
}
export declare class RegisterOrganizationDelegatedAdminResponse extends SpeakeasyBase {
    /**
     * AccountNotFoundException
     */
    accountNotFoundException?: any;
    /**
     * AccountRegisteredException
     */
    accountRegisteredException?: any;
    /**
     * CannotDelegateManagementAccountException
     */
    cannotDelegateManagementAccountException?: any;
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
     * DelegatedAdminAccountLimitExceededException
     */
    delegatedAdminAccountLimitExceededException?: any;
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
    /**
     * Success
     */
    registerOrganizationDelegatedAdminResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnsupportedOperationException
     */
    unsupportedOperationException?: any;
}
