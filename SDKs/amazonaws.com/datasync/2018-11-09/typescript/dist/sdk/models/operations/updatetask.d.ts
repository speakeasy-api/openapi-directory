import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateTaskXAmzTargetEnum {
    FmrsServiceUpdateTask = "FmrsService.UpdateTask"
}
export declare class UpdateTaskRequest extends SpeakeasyBase {
    updateTaskRequest: shared.UpdateTaskRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateTaskXAmzTargetEnum;
}
export declare class UpdateTaskResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalException
     */
    internalException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateTaskResponse?: Record<string, any>;
}
