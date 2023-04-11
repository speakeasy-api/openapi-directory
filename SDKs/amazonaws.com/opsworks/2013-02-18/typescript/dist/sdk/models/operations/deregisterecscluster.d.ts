import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeregisterEcsClusterXAmzTargetEnum {
    OpsWorks20130218DeregisterEcsCluster = "OpsWorks_20130218.DeregisterEcsCluster"
}
export declare class DeregisterEcsClusterRequest extends SpeakeasyBase {
    deregisterEcsClusterRequest: shared.DeregisterEcsClusterRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeregisterEcsClusterXAmzTargetEnum;
}
export declare class DeregisterEcsClusterResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
