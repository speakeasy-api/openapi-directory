import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StopImageBuilderXAmzTargetEnum {
    PhotonAdminProxyServiceStopImageBuilder = "PhotonAdminProxyService.StopImageBuilder"
}
export declare class StopImageBuilderRequest extends SpeakeasyBase {
    stopImageBuilderRequest: shared.StopImageBuilderRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopImageBuilderXAmzTargetEnum;
}
export declare class StopImageBuilderResponse extends SpeakeasyBase {
    /**
     * ConcurrentModificationException
     */
    concurrentModificationException?: any;
    contentType: string;
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
    /**
     * Success
     */
    stopImageBuilderResult?: shared.StopImageBuilderResult;
}
