import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateCapacityProviderXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113UpdateCapacityProvider = "AmazonEC2ContainerServiceV20141113.UpdateCapacityProvider"
}
export declare class UpdateCapacityProviderRequest extends SpeakeasyBase {
    updateCapacityProviderRequest: shared.UpdateCapacityProviderRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateCapacityProviderXAmzTargetEnum;
}
export declare class UpdateCapacityProviderResponse extends SpeakeasyBase {
    /**
     * ClientException
     */
    clientException?: any;
    contentType: string;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServerException
     */
    serverException?: any;
    /**
     * Success
     */
    updateCapacityProviderResponse?: shared.UpdateCapacityProviderResponse;
}
