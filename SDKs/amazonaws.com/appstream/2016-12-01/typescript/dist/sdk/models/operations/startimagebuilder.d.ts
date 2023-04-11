import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StartImageBuilderXAmzTargetEnum {
    PhotonAdminProxyServiceStartImageBuilder = "PhotonAdminProxyService.StartImageBuilder"
}
export declare class StartImageBuilderRequest extends SpeakeasyBase {
    startImageBuilderRequest: shared.StartImageBuilderRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartImageBuilderXAmzTargetEnum;
}
export declare class StartImageBuilderResponse extends SpeakeasyBase {
    /**
     * ConcurrentModificationException
     */
    concurrentModificationException?: any;
    contentType: string;
    /**
     * IncompatibleImageException
     */
    incompatibleImageException?: any;
    /**
     * InvalidAccountStatusException
     */
    invalidAccountStatusException?: any;
    /**
     * ResourceNotAvailableException
     */
    resourceNotAvailableException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * Success
     */
    startImageBuilderResult?: shared.StartImageBuilderResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
