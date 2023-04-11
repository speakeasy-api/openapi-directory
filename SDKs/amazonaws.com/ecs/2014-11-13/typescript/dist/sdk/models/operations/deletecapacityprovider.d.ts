import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteCapacityProviderXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113DeleteCapacityProvider = "AmazonEC2ContainerServiceV20141113.DeleteCapacityProvider"
}
export declare class DeleteCapacityProviderRequest extends SpeakeasyBase {
    deleteCapacityProviderRequest: shared.DeleteCapacityProviderRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteCapacityProviderXAmzTargetEnum;
}
export declare class DeleteCapacityProviderResponse extends SpeakeasyBase {
    /**
     * ClientException
     */
    clientException?: any;
    contentType: string;
    /**
     * Success
     */
    deleteCapacityProviderResponse?: shared.DeleteCapacityProviderResponse;
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
