import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum FailoverShardXAmzTargetEnum {
    AmazonMemoryDBFailoverShard = "AmazonMemoryDB.FailoverShard"
}
export declare class FailoverShardRequest extends SpeakeasyBase {
    failoverShardRequest: shared.FailoverShardRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: FailoverShardXAmzTargetEnum;
}
export declare class FailoverShardResponse extends SpeakeasyBase {
    /**
     * APICallRateForCustomerExceededFault
     */
    apiCallRateForCustomerExceededFault?: any;
    /**
     * ClusterNotFoundFault
     */
    clusterNotFoundFault?: any;
    contentType: string;
    /**
     * Success
     */
    failoverShardResponse?: shared.FailoverShardResponse;
    /**
     * InvalidClusterStateFault
     */
    invalidClusterStateFault?: any;
    /**
     * InvalidKMSKeyFault
     */
    invalidKMSKeyFault?: any;
    /**
     * InvalidParameterCombinationException
     */
    invalidParameterCombinationException?: any;
    /**
     * InvalidParameterValueException
     */
    invalidParameterValueException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ShardNotFoundFault
     */
    shardNotFoundFault?: any;
    /**
     * TestFailoverNotAvailableFault
     */
    testFailoverNotAvailableFault?: any;
}
