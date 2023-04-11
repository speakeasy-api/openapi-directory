import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 *  The identifer of the input.
 */
export declare class ListInputRoutingsRequestBodyInputIdentifier extends SpeakeasyBase {
    iotEventsInputIdentifier?: shared.IotEventsInputIdentifier;
    iotSiteWiseInputIdentifier?: shared.IotSiteWiseInputIdentifier;
}
export declare class ListInputRoutingsRequestBody extends SpeakeasyBase {
    /**
     *  The identifer of the input.
     */
    inputIdentifier: ListInputRoutingsRequestBodyInputIdentifier;
    /**
     *  The maximum number of results to be returned per request.
     */
    maxResults?: number;
    /**
     *  The token that you can use to return the next set of results.
     */
    nextToken?: string;
}
export declare class ListInputRoutingsRequest extends SpeakeasyBase {
    requestBody: ListInputRoutingsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListInputRoutingsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * Success
     */
    listInputRoutingsResponse?: shared.ListInputRoutingsResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
