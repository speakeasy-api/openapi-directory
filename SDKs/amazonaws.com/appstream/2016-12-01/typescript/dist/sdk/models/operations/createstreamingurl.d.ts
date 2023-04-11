import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateStreamingURLXAmzTargetEnum {
    PhotonAdminProxyServiceCreateStreamingURL = "PhotonAdminProxyService.CreateStreamingURL"
}
export declare class CreateStreamingURLRequest extends SpeakeasyBase {
    createStreamingURLRequest: shared.CreateStreamingURLRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateStreamingURLXAmzTargetEnum;
}
export declare class CreateStreamingURLResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createStreamingURLResult?: shared.CreateStreamingURLResult;
    /**
     * InvalidParameterCombinationException
     */
    invalidParameterCombinationException?: any;
    /**
     * OperationNotPermittedException
     */
    operationNotPermittedException?: any;
    /**
     * ResourceNotAvailableException
     */
    resourceNotAvailableException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
