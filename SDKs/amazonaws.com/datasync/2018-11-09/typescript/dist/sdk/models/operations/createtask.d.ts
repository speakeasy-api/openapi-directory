import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateTaskXAmzTargetEnum {
    FmrsServiceCreateTask = "FmrsService.CreateTask"
}
export declare class CreateTaskRequest extends SpeakeasyBase {
    createTaskRequest: shared.CreateTaskRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateTaskXAmzTargetEnum;
}
export declare class CreateTaskResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createTaskResponse?: shared.CreateTaskResponse;
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
