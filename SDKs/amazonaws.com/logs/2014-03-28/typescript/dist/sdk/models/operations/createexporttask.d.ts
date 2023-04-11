import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateExportTaskXAmzTargetEnum {
    Logs20140328CreateExportTask = "Logs_20140328.CreateExportTask"
}
export declare class CreateExportTaskRequest extends SpeakeasyBase {
    createExportTaskRequest: shared.CreateExportTaskRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateExportTaskXAmzTargetEnum;
}
export declare class CreateExportTaskResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createExportTaskResponse?: shared.CreateExportTaskResponse;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * OperationAbortedException
     */
    operationAbortedException?: any;
    /**
     * ResourceAlreadyExistsException
     */
    resourceAlreadyExistsException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
