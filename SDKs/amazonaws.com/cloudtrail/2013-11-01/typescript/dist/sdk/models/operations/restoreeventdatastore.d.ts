import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum RestoreEventDataStoreXAmzTargetEnum {
    ComAmazonawsCloudtrailV20131101CloudTrail20131101RestoreEventDataStore = "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.RestoreEventDataStore"
}
export declare class RestoreEventDataStoreRequest extends SpeakeasyBase {
    restoreEventDataStoreRequest: shared.RestoreEventDataStoreRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RestoreEventDataStoreXAmzTargetEnum;
}
export declare class RestoreEventDataStoreResponse extends SpeakeasyBase {
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
     * EventDataStoreMaxLimitExceededException
     */
    eventDataStoreMaxLimitExceededException?: any;
    /**
     * EventDataStoreNotFoundException
     */
    eventDataStoreNotFoundException?: any;
    /**
     * InsufficientDependencyServiceAccessPermissionException
     */
    insufficientDependencyServiceAccessPermissionException?: any;
    /**
     * InvalidEventDataStoreStatusException
     */
    invalidEventDataStoreStatusException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
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
    /**
     * Success
     */
    restoreEventDataStoreResponse?: shared.RestoreEventDataStoreResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnsupportedOperationException
     */
    unsupportedOperationException?: any;
}
