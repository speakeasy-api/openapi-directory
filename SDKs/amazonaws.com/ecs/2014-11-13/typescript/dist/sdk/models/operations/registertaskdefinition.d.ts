import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum RegisterTaskDefinitionXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113RegisterTaskDefinition = "AmazonEC2ContainerServiceV20141113.RegisterTaskDefinition"
}
export declare class RegisterTaskDefinitionRequest extends SpeakeasyBase {
    registerTaskDefinitionRequest: shared.RegisterTaskDefinitionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RegisterTaskDefinitionXAmzTargetEnum;
}
export declare class RegisterTaskDefinitionResponse extends SpeakeasyBase {
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
    registerTaskDefinitionResponse?: shared.RegisterTaskDefinitionResponse;
    /**
     * ServerException
     */
    serverException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
