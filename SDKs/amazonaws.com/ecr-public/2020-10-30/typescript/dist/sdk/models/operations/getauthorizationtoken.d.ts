import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetAuthorizationTokenXAmzTargetEnum {
    SpencerFrontendServiceGetAuthorizationToken = "SpencerFrontendService.GetAuthorizationToken"
}
export declare class GetAuthorizationTokenRequest extends SpeakeasyBase {
    requestBody: Record<string, any>;
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
    /**
     * UnsupportedCommandException
     */
    unsupportedCommandException?: any;
}
