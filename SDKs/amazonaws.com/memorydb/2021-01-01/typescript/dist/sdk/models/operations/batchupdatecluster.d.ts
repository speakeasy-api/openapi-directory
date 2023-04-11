import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum BatchUpdateClusterXAmzTargetEnum {
    AmazonMemoryDBBatchUpdateCluster = "AmazonMemoryDB.BatchUpdateCluster"
}
export declare class BatchUpdateClusterRequest extends SpeakeasyBase {
    batchUpdateClusterRequest: shared.BatchUpdateClusterRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchUpdateClusterXAmzTargetEnum;
}
export declare class BatchUpdateClusterResponse extends SpeakeasyBase {
    /**
     * Success
     */
    batchUpdateClusterResponse?: shared.BatchUpdateClusterResponse;
    contentType: string;
    /**
     * InvalidParameterValueException
     */
    invalidParameterValueException?: any;
    /**
     * ServiceUpdateNotFoundFault
     */
    serviceUpdateNotFoundFault?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
