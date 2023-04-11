import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateClusterXAmzTargetEnum {
    AmazonDaxv3CreateCluster = "AmazonDAXV3.CreateCluster"
}
export declare class CreateClusterRequest extends SpeakeasyBase {
    createClusterRequest: shared.CreateClusterRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateClusterXAmzTargetEnum;
}
export declare class CreateClusterResponse extends SpeakeasyBase {
    /**
     * ClusterAlreadyExistsFault
     */
    clusterAlreadyExistsFault?: any;
    /**
     * ClusterQuotaForCustomerExceededFault
     */
    clusterQuotaForCustomerExceededFault?: any;
    contentType: string;
    /**
     * Success
     */
    createClusterResponse?: shared.CreateClusterResponse;
    /**
     * InsufficientClusterCapacityFault
     */
    insufficientClusterCapacityFault?: any;
    /**
     * InvalidClusterStateFault
     */
    invalidClusterStateFault?: any;
    /**
     * InvalidParameterCombinationException
     */
    invalidParameterCombinationException?: any;
    /**
     * InvalidParameterGroupStateFault
     */
    invalidParameterGroupStateFault?: any;
    /**
     * InvalidParameterValueException
     */
    invalidParameterValueException?: any;
    /**
     * InvalidVPCNetworkStateFault
     */
    invalidVPCNetworkStateFault?: any;
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
    /**
     * ServiceLinkedRoleNotFoundFault
     */
    serviceLinkedRoleNotFoundFault?: any;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * SubnetGroupNotFoundFault
     */
    subnetGroupNotFoundFault?: any;
    /**
     * TagQuotaPerResourceExceeded
     */
    tagQuotaPerResourceExceeded?: any;
}
