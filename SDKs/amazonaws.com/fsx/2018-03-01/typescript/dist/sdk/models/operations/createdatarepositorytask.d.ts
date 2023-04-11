import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateDataRepositoryTaskXAmzTargetEnum {
    AWSSimbaAPIServiceV20180301CreateDataRepositoryTask = "AWSSimbaAPIService_v20180301.CreateDataRepositoryTask"
}
export declare class CreateDataRepositoryTaskRequest extends SpeakeasyBase {
    createDataRepositoryTaskRequest: shared.CreateDataRepositoryTaskRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateDataRepositoryTaskXAmzTargetEnum;
}
export declare class CreateDataRepositoryTaskResponse extends SpeakeasyBase {
    /**
     * BadRequest
     */
    badRequest?: any;
    contentType: string;
    /**
     * Success
     */
    createDataRepositoryTaskResponse?: shared.CreateDataRepositoryTaskResponse;
    /**
     * DataRepositoryTaskExecuting
     */
    dataRepositoryTaskExecuting?: any;
    /**
     * FileSystemNotFound
     */
    fileSystemNotFound?: any;
    /**
     * IncompatibleParameterError
     */
    incompatibleParameterError?: any;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceLimitExceeded
     */
    serviceLimitExceeded?: any;
    /**
     * UnsupportedOperation
     */
    unsupportedOperation?: any;
}
