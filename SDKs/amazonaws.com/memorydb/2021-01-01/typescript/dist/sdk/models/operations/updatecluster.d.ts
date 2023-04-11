import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateClusterXAmzTargetEnum {
    AmazonMemoryDBUpdateCluster = "AmazonMemoryDB.UpdateCluster"
}
export declare class UpdateClusterRequest extends SpeakeasyBase {
    updateClusterRequest: shared.UpdateClusterRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateClusterXAmzTargetEnum;
}
export declare class UpdateClusterResponse extends SpeakeasyBase {
    /**
     * ACLNotFoundFault
     */
    aclNotFoundFault?: any;
    /**
     * ClusterNotFoundFault
     */
    clusterNotFoundFault?: any;
    /**
     * ClusterQuotaForCustomerExceededFault
     */
    clusterQuotaForCustomerExceededFault?: any;
    contentType: string;
    /**
     * InvalidACLStateFault
     */
    invalidACLStateFault?: any;
    /**
     * InvalidClusterStateFault
     */
    invalidClusterStateFault?: any;
    /**
     * InvalidKMSKeyFault
     */
    invalidKMSKeyFault?: any;
    /**
     * InvalidNodeStateFault
     */
    invalidNodeStateFault?: any;
    /**
     * InvalidParameterCombinationException
     */
    invalidParameterCombinationException?: any;
    /**
     * InvalidParameterValueException
     */
    invalidParameterValueException?: any;
    /**
     * InvalidVPCNetworkStateFault
     */
    invalidVPCNetworkStateFault?: any;
    /**
     * NoOperationFault
     */
    noOperationFault?: any;
    /**
     * NodeQuotaForClusterExceededFault
     */
    nodeQuotaForClusterExceededFault?: any;
    /**
     * NodeQuotaForCustomerExceededFault
     */
    nodeQuotaForCustomerExceededFault?: any;
    /**
     * ParameterGroupNotFoundFault
     */
    parameterGroupNotFoundFault?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceLinkedRoleNotFoundFault
     */
    serviceLinkedRoleNotFoundFault?: any;
    /**
     * ShardsPerClusterQuotaExceededFault
     */
    shardsPerClusterQuotaExceededFault?: any;
    /**
     * Success
     */
    updateClusterResponse?: shared.UpdateClusterResponse;
}
