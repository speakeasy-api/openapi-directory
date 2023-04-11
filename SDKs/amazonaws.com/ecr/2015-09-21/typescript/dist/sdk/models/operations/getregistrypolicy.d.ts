import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetRegistryPolicyXAmzTargetEnum {
    AmazonEc2ContainerRegistryV20150921GetRegistryPolicy = "AmazonEC2ContainerRegistry_V20150921.GetRegistryPolicy"
}
export declare class GetRegistryPolicyRequest extends SpeakeasyBase {
    requestBody: Record<string, any>;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetRegistryPolicyXAmzTargetEnum;
}
export declare class GetRegistryPolicyResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getRegistryPolicyResponse?: shared.GetRegistryPolicyResponse;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * RegistryPolicyNotFoundException
     */
    registryPolicyNotFoundException?: any;
    /**
     * ServerException
     */
    serverException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
