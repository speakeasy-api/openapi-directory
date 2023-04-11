import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateImageBuilderStreamingURLXAmzTargetEnum {
    PhotonAdminProxyServiceCreateImageBuilderStreamingURL = "PhotonAdminProxyService.CreateImageBuilderStreamingURL"
}
export declare class CreateImageBuilderStreamingURLRequest extends SpeakeasyBase {
    createImageBuilderStreamingURLRequest: shared.CreateImageBuilderStreamingURLRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateImageBuilderStreamingURLXAmzTargetEnum;
}
export declare class CreateImageBuilderStreamingURLResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createImageBuilderStreamingURLResult?: shared.CreateImageBuilderStreamingURLResult;
    /**
     * OperationNotPermittedException
     */
    operationNotPermittedException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
