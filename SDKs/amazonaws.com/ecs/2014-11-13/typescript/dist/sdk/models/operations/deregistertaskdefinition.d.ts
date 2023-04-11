import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeregisterTaskDefinitionXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113DeregisterTaskDefinition = "AmazonEC2ContainerServiceV20141113.DeregisterTaskDefinition"
}
export declare class DeregisterTaskDefinitionRequest extends SpeakeasyBase {
    deregisterTaskDefinitionRequest: shared.DeregisterTaskDefinitionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeregisterTaskDefinitionXAmzTargetEnum;
}
export declare class DeregisterTaskDefinitionResponse extends SpeakeasyBase {
    /**
     * ClientException
     */
    clientException?: any;
    contentType: string;
    /**
     * Success
     */
    deregisterTaskDefinitionResponse?: shared.DeregisterTaskDefinitionResponse;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * ServerException
     */
    serverException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
