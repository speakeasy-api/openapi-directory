import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum RegisterEcsClusterXAmzTargetEnum {
    OpsWorks20130218RegisterEcsCluster = "OpsWorks_20130218.RegisterEcsCluster"
}
export declare class RegisterEcsClusterRequest extends SpeakeasyBase {
    registerEcsClusterRequest: shared.RegisterEcsClusterRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RegisterEcsClusterXAmzTargetEnum;
}
export declare class RegisterEcsClusterResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    registerEcsClusterResult?: shared.RegisterEcsClusterResult;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
