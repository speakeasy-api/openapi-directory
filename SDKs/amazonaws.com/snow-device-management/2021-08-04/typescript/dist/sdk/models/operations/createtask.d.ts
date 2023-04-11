import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The command given to the device to execute.
 */
export declare class CreateTaskRequestBodyCommand extends SpeakeasyBase {
    reboot?: Record<string, any>;
    unlock?: Record<string, any>;
}
export declare class CreateTaskRequestBody extends SpeakeasyBase {
    /**
     * A token ensuring that the action is called only once with the specified details.
     */
    clientToken?: string;
    /**
     * The command given to the device to execute.
     */
    command: CreateTaskRequestBodyCommand;
    /**
     * A description of the task and its targets.
     */
    description?: string;
    /**
     * Optional metadata that you assign to a resource. You can use tags to categorize a resource in different ways, such as by purpose, owner, or environment.
     */
    tags?: Record<string, string>;
    /**
     * A list of managed device IDs.
     */
    targets: string[];
}
export declare class CreateTaskRequest extends SpeakeasyBase {
    requestBody: CreateTaskRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateTaskResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    createTaskOutput?: shared.CreateTaskOutput;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
