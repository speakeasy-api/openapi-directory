import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeregisterOnPremisesInstanceXAmzTargetEnum {
    CodeDeploy20141006DeregisterOnPremisesInstance = "CodeDeploy_20141006.DeregisterOnPremisesInstance"
}
export declare class DeregisterOnPremisesInstanceRequest extends SpeakeasyBase {
    deregisterOnPremisesInstanceInput: shared.DeregisterOnPremisesInstanceInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeregisterOnPremisesInstanceXAmzTargetEnum;
}
export declare class DeregisterOnPremisesInstanceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InstanceNameRequiredException
     */
    instanceNameRequiredException?: any;
    /**
     * InvalidInstanceNameException
     */
    invalidInstanceNameException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
