import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateCapacityProviderXAmzTargetEnum {
    AmazonEc2ContainerServiceV20141113CreateCapacityProvider = "AmazonEC2ContainerServiceV20141113.CreateCapacityProvider"
}
export declare class CreateCapacityProviderRequest extends SpeakeasyBase {
    createCapacityProviderRequest: shared.CreateCapacityProviderRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateCapacityProviderXAmzTargetEnum;
}
export declare class CreateCapacityProviderResponse extends SpeakeasyBase {
    /**
     * ClientException
     */
    clientException?: any;
    contentType: string;
    /**
     * Success
     */
    createCapacityProviderResponse?: shared.CreateCapacityProviderResponse;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * ServerException
     */
    serverException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UpdateInProgressException
     */
    updateInProgressException?: any;
}
