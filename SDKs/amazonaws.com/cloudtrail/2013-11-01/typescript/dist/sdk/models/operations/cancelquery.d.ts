import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CancelQueryXAmzTargetEnum {
    ComAmazonawsCloudtrailV20131101CloudTrail20131101CancelQuery = "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CancelQuery"
}
export declare class CancelQueryRequest extends SpeakeasyBase {
    cancelQueryRequest: shared.CancelQueryRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CancelQueryXAmzTargetEnum;
}
export declare class CancelQueryResponse extends SpeakeasyBase {
    /**
     * Success
     */
    cancelQueryResponse?: shared.CancelQueryResponse;
    /**
     * ConflictException
     */
    conflictException?: any;
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
     * InactiveEventDataStoreException
     */
    inactiveEventDataStoreException?: any;
    /**
     * InactiveQueryException
     */
    inactiveQueryException?: any;
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
    /**
     * QueryIdNotFoundException
     */
    queryIdNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnsupportedOperationException
     */
    unsupportedOperationException?: any;
}
