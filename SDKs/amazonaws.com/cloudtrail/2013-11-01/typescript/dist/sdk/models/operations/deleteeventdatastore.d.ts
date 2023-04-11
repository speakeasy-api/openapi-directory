import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteEventDataStoreXAmzTargetEnum {
    ComAmazonawsCloudtrailV20131101CloudTrail20131101DeleteEventDataStore = "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteEventDataStore"
}
export declare class DeleteEventDataStoreRequest extends SpeakeasyBase {
    deleteEventDataStoreRequest: shared.DeleteEventDataStoreRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteEventDataStoreXAmzTargetEnum;
}
export declare class DeleteEventDataStoreResponse extends SpeakeasyBase {
    /**
     * ChannelExistsForEDSException
     */
    channelExistsForEDSException?: any;
    contentType: string;
    /**
     * Success
     */
    deleteEventDataStoreResponse?: Record<string, any>;
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
     * EventDataStoreTerminationProtectedException
     */
    eventDataStoreTerminationProtectedException?: any;
    /**
     * InactiveEventDataStoreException
     */
    inactiveEventDataStoreException?: any;
    /**
     * InsufficientDependencyServiceAccessPermissionException
     */
    insufficientDependencyServiceAccessPermissionException?: any;
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
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnsupportedOperationException
     */
    unsupportedOperationException?: any;
}
