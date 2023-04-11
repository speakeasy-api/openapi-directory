import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The name of the API action for which to get an endpoint.
 */
export declare enum GetDataEndpointRequestBodyAPINameEnum {
    PutMedia = "PUT_MEDIA",
    GetMedia = "GET_MEDIA",
    ListFragments = "LIST_FRAGMENTS",
    GetMediaForFragmentList = "GET_MEDIA_FOR_FRAGMENT_LIST",
    GetHlsStreamingSessionUrl = "GET_HLS_STREAMING_SESSION_URL",
    GetDashStreamingSessionUrl = "GET_DASH_STREAMING_SESSION_URL",
    GetClip = "GET_CLIP",
    GetImages = "GET_IMAGES"
}
export declare class GetDataEndpointRequestBody extends SpeakeasyBase {
    /**
     * The name of the API action for which to get an endpoint.
     */
    apiName: GetDataEndpointRequestBodyAPINameEnum;
    /**
     * The Amazon Resource Name (ARN) of the stream that you want to get the endpoint for. You must specify either this parameter or a <code>StreamName</code> in the request.
     */
    streamARN?: string;
    /**
     * The name of the stream that you want to get the endpoint for. You must specify either this parameter or a <code>StreamARN</code> in the request.
     */
    streamName?: string;
}
export declare class GetDataEndpointRequest extends SpeakeasyBase {
    requestBody: GetDataEndpointRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDataEndpointResponse extends SpeakeasyBase {
    /**
     * ClientLimitExceededException
     */
    clientLimitExceededException?: any;
    contentType: string;
    /**
     * Success
     */
    getDataEndpointOutput?: shared.GetDataEndpointOutput;
    /**
     * InvalidArgumentException
     */
    invalidArgumentException?: any;
    /**
     * NotAuthorizedException
     */
    notAuthorizedException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
