import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DecreaseReplicationFactorXAmzTargetEnum {
    AmazonDaxv3DecreaseReplicationFactor = "AmazonDAXV3.DecreaseReplicationFactor"
}
export declare class DecreaseReplicationFactorRequest extends SpeakeasyBase {
    decreaseReplicationFactorRequest: shared.DecreaseReplicationFactorRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DecreaseReplicationFactorXAmzTargetEnum;
}
export declare class DecreaseReplicationFactorResponse extends SpeakeasyBase {
    /**
     * ClusterNotFoundFault
     */
    clusterNotFoundFault?: any;
    contentType: string;
    /**
     * Success
     */
    decreaseReplicationFactorResponse?: shared.DecreaseReplicationFactorResponse;
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
     * NodeNotFoundFault
     */
    nodeNotFoundFault?: any;
    /**
     * ServiceLinkedRoleNotFoundFault
     */
    serviceLinkedRoleNotFoundFault?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
