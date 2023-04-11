import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum RegisterContainerInstanceXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113RegisterContainerInstance = "AmazonEC2ContainerServiceV20141113.RegisterContainerInstance"
}
export declare class RegisterContainerInstanceRequest extends SpeakeasyBase {
    registerContainerInstanceRequest: shared.RegisterContainerInstanceRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RegisterContainerInstanceXAmzTargetEnum;
}
export declare class RegisterContainerInstanceResponse extends SpeakeasyBase {
    /**
     * ClientException
     */
    clientException?: any;
    contentType: string;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * Success
     */
    registerContainerInstanceResponse?: shared.RegisterContainerInstanceResponse;
    /**
     * ServerException
     */
    serverException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
