import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CancelExportTaskXAmzTargetEnum {
    Logs20140328CancelExportTask = "Logs_20140328.CancelExportTask"
}
export declare class CancelExportTaskRequest extends SpeakeasyBase {
    cancelExportTaskRequest: shared.CancelExportTaskRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CancelExportTaskXAmzTargetEnum;
}
export declare class CancelExportTaskResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidOperationException
     */
    invalidOperationException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
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
}
