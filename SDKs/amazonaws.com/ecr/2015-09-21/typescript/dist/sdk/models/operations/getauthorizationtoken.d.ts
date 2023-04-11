import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetAuthorizationTokenXAmzTargetEnum {
    AmazonEc2ContainerRegistryV20150921GetAuthorizationToken = "AmazonEC2ContainerRegistry_V20150921.GetAuthorizationToken"
}
export declare class GetAuthorizationTokenRequest extends SpeakeasyBase {
    getAuthorizationTokenRequest: shared.GetAuthorizationTokenRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetAuthorizationTokenXAmzTargetEnum;
}
export declare class GetAuthorizationTokenResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getAuthorizationTokenResponse?: shared.GetAuthorizationTokenResponse;
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
