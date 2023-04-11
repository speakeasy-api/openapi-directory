import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateEventDataStoreXAmzTargetEnum {
    ComAmazonawsCloudtrailV20131101CloudTrail20131101UpdateEventDataStore = "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.UpdateEventDataStore"
}
export declare class UpdateEventDataStoreRequest extends SpeakeasyBase {
    updateEventDataStoreRequest: shared.UpdateEventDataStoreRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateEventDataStoreXAmzTargetEnum;
}
export declare class UpdateEventDataStoreResponse extends SpeakeasyBase {
    /**
     * CloudTrailAccessNotEnabledException
     */
    cloudTrailAccessNotEnabledException?: any;
    contentType: string;
    /**
     * EventDataStoreARNInvalidException
     */
    eventDataStoreARNInvalidException?: any;
    /**
     * EventDataStoreHasOngoingImportException
     */
    eventDataStoreHasOngoingImportException?: any;
    /**
     * EventDataStoreNotFoundException
     */
    eventDataStoreNotFoundException?: any;
    /**
     * InactiveEventDataStoreException
     */
    inactiveEventDataStoreException?: any;
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
    /**
     * Success
     */
    updateEventDataStoreResponse?: shared.UpdateEventDataStoreResponse;
}
