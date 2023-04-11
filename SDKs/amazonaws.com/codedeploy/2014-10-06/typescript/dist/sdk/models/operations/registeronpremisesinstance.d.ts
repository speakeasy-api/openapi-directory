import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum RegisterOnPremisesInstanceXAmzTargetEnum {
    CodeDeploy20141006RegisterOnPremisesInstance = "CodeDeploy_20141006.RegisterOnPremisesInstance"
}
export declare class RegisterOnPremisesInstanceRequest extends SpeakeasyBase {
    registerOnPremisesInstanceInput: shared.RegisterOnPremisesInstanceInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RegisterOnPremisesInstanceXAmzTargetEnum;
}
export declare class RegisterOnPremisesInstanceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * IamArnRequiredException
     */
    iamArnRequiredException?: any;
    /**
     * IamSessionArnAlreadyRegisteredException
     */
    iamSessionArnAlreadyRegisteredException?: any;
    /**
     * IamUserArnAlreadyRegisteredException
     */
    iamUserArnAlreadyRegisteredException?: any;
    /**
     * IamUserArnRequiredException
     */
    iamUserArnRequiredException?: any;
    /**
     * InstanceNameAlreadyRegisteredException
     */
    instanceNameAlreadyRegisteredException?: any;
    /**
     * InstanceNameRequiredException
     */
    instanceNameRequiredException?: any;
    /**
     * InvalidIamSessionArnException
     */
    invalidIamSessionArnException?: any;
    /**
     * InvalidIamUserArnException
     */
    invalidIamUserArnException?: any;
    /**
     * InvalidInstanceNameException
     */
    invalidInstanceNameException?: any;
    /**
     * MultipleIamArnsProvidedException
     */
    multipleIamArnsProvidedException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
