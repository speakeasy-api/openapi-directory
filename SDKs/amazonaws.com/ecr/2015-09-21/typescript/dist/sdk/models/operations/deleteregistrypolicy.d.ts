import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteRegistryPolicyXAmzTargetEnum {
    AmazonEc2ContainerRegistryV20150921DeleteRegistryPolicy = "AmazonEC2ContainerRegistry_V20150921.DeleteRegistryPolicy"
}
export declare class DeleteRegistryPolicyRequest extends SpeakeasyBase {
    requestBody: Record<string, any>;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteRegistryPolicyXAmzTargetEnum;
}
export declare class DeleteRegistryPolicyResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteRegistryPolicyResponse?: shared.DeleteRegistryPolicyResponse;
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
