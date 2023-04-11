import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetEventDataStoreXAmzTargetEnum {
    ComAmazonawsCloudtrailV20131101CloudTrail20131101GetEventDataStore = "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetEventDataStore"
}
export declare class GetEventDataStoreRequest extends SpeakeasyBase {
    getEventDataStoreRequest: shared.GetEventDataStoreRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetEventDataStoreXAmzTargetEnum;
}
export declare class GetEventDataStoreResponse extends SpeakeasyBase {
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
     * Success
     */
    getEventDataStoreResponse?: shared.GetEventDataStoreResponse;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * NoManagementAccountSLRExistsException
     */
    noManagementAccountSLRExistsException?: any;
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
