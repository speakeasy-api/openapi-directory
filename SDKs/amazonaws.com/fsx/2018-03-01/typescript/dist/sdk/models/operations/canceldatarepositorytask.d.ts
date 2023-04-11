import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CancelDataRepositoryTaskXAmzTargetEnum {
    AWSSimbaAPIServiceV20180301CancelDataRepositoryTask = "AWSSimbaAPIService_v20180301.CancelDataRepositoryTask"
}
export declare class CancelDataRepositoryTaskRequest extends SpeakeasyBase {
    cancelDataRepositoryTaskRequest: shared.CancelDataRepositoryTaskRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CancelDataRepositoryTaskXAmzTargetEnum;
}
export declare class CancelDataRepositoryTaskResponse extends SpeakeasyBase {
    /**
     * BadRequest
     */
    badRequest?: any;
    /**
     * Success
     */
    cancelDataRepositoryTaskResponse?: shared.CancelDataRepositoryTaskResponse;
    contentType: string;
    /**
     * DataRepositoryTaskEnded
     */
    dataRepositoryTaskEnded?: any;
    /**
     * DataRepositoryTaskNotFound
     */
    dataRepositoryTaskNotFound?: any;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnsupportedOperation
     */
    unsupportedOperation?: any;
}
