import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StartImportXAmzTargetEnum {
    ComAmazonawsCloudtrailV20131101CloudTrail20131101StartImport = "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StartImport"
}
export declare class StartImportRequest extends SpeakeasyBase {
    startImportRequest: shared.StartImportRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartImportXAmzTargetEnum;
}
export declare class StartImportResponse extends SpeakeasyBase {
    /**
     * AccountHasOngoingImportException
     */
    accountHasOngoingImportException?: any;
    contentType: string;
    /**
     * EventDataStoreARNInvalidException
     */
    eventDataStoreARNInvalidException?: any;
    /**
     * EventDataStoreNotFoundException
     */
    eventDataStoreNotFoundException?: any;
    /**
     * ImportNotFoundException
     */
    importNotFoundException?: any;
    /**
     * InactiveEventDataStoreException
     */
    inactiveEventDataStoreException?: any;
    /**
     * InsufficientEncryptionPolicyException
     */
    insufficientEncryptionPolicyException?: any;
    /**
     * InvalidEventDataStoreCategoryException
     */
    invalidEventDataStoreCategoryException?: any;
    /**
     * InvalidEventDataStoreStatusException
     */
    invalidEventDataStoreStatusException?: any;
    /**
     * InvalidImportSourceException
     */
    invalidImportSourceException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * OperationNotPermittedException
     */
    operationNotPermittedException?: any;
    /**
     * Success
     */
    startImportResponse?: shared.StartImportResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnsupportedOperationException
     */
    unsupportedOperationException?: any;
}
