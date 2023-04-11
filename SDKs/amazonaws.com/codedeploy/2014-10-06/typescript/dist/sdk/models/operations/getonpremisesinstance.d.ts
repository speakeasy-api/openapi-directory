import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetOnPremisesInstanceXAmzTargetEnum {
    CodeDeploy20141006GetOnPremisesInstance = "CodeDeploy_20141006.GetOnPremisesInstance"
}
export declare class GetOnPremisesInstanceRequest extends SpeakeasyBase {
    getOnPremisesInstanceInput: shared.GetOnPremisesInstanceInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetOnPremisesInstanceXAmzTargetEnum;
}
export declare class GetOnPremisesInstanceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getOnPremisesInstanceOutput?: shared.GetOnPremisesInstanceOutput;
    /**
     * InstanceNameRequiredException
     */
    instanceNameRequiredException?: any;
    /**
     * InstanceNotRegisteredException
     */
    instanceNotRegisteredException?: any;
    /**
     * InvalidInstanceNameException
     */
    invalidInstanceNameException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
