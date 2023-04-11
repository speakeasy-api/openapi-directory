import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum IncreaseReplicationFactorXAmzTargetEnum {
    AmazonDaxv3IncreaseReplicationFactor = "AmazonDAXV3.IncreaseReplicationFactor"
}
export declare class IncreaseReplicationFactorRequest extends SpeakeasyBase {
    increaseReplicationFactorRequest: shared.IncreaseReplicationFactorRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: IncreaseReplicationFactorXAmzTargetEnum;
}
export declare class IncreaseReplicationFactorResponse extends SpeakeasyBase {
    /**
     * ClusterNotFoundFault
     */
    clusterNotFoundFault?: any;
    contentType: string;
    /**
     * Success
     */
    increaseReplicationFactorResponse?: shared.IncreaseReplicationFactorResponse;
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
     * ServiceLinkedRoleNotFoundFault
     */
    serviceLinkedRoleNotFoundFault?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
