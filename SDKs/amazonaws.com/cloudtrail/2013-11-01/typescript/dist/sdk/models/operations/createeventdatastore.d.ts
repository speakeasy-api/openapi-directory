import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateEventDataStoreXAmzTargetEnum {
    ComAmazonawsCloudtrailV20131101CloudTrail20131101CreateEventDataStore = "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CreateEventDataStore"
}
export declare class CreateEventDataStoreRequest extends SpeakeasyBase {
    createEventDataStoreRequest: shared.CreateEventDataStoreRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateEventDataStoreXAmzTargetEnum;
}
export declare class CreateEventDataStoreResponse extends SpeakeasyBase {
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
    createEventDataStoreResponse?: shared.CreateEventDataStoreResponse;
    /**
     * EventDataStoreAlreadyExistsException
     */
    eventDataStoreAlreadyExistsException?: any;
    /**
     * EventDataStoreMaxLimitExceededException
     */
    eventDataStoreMaxLimitExceededException?: any;
    /**
     * InsufficientDependencyServiceAccessPermissionException
     */
    insufficientDependencyServiceAccessPermissionException?: any;
    /**
     * InsufficientEncryptionPolicyException
     */
    insufficientEncryptionPolicyException?: any;
    /**
     * InvalidEventSelectorsException
     */
    invalidEventSelectorsException?: any;
    /**
     * InvalidKmsKeyIdException
     */
    invalidKmsKeyIdException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * InvalidTagParameterException
     */
    invalidTagParameterException?: any;
    /**
     * KmsException
     */
    kmsException?: any;
    /**
     * KmsKeyNotFoundException
     */
    kmsKeyNotFoundException?: any;
    /**
     * NoManagementAccountSLRExistsException
     */
    noManagementAccountSLRExistsException?: any;
    /**
     * NotOrganizationMasterAccountException
     */
    notOrganizationMasterAccountException?: any;
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
