import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteTaskXAmzTargetEnum {
    FmrsServiceDeleteTask = "FmrsService.DeleteTask"
}
export declare class DeleteTaskRequest extends SpeakeasyBase {
    deleteTaskRequest: shared.DeleteTaskRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteTaskXAmzTargetEnum;
}
export declare class DeleteTaskResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteTaskResponse?: Record<string, any>;
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
}
