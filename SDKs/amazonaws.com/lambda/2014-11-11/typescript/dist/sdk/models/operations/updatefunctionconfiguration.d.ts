import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateFunctionConfigurationRequest extends SpeakeasyBase {
    /**
     * A short user-defined function description. Lambda does not use this value. Assign a meaningful description as you see fit.
     */
    description?: string;
    /**
     * The name of the Lambda function.
     */
    functionName: string;
    /**
     * The function that Lambda calls to begin executing your function. For Node.js, it is the <i>module-name.export</i> value in your function.
     */
    handler?: string;
    /**
     * The amount of memory, in MB, your Lambda function is given. Lambda uses this memory size to infer the amount of CPU allocated to your function. Your function use-case determines your CPU and memory requirements. For example, a database operation might need less memory compared to an image processing function. The default value is 128 MB. The value must be a multiple of 64 MB.
     */
    memorySize?: number;
    /**
     * The Amazon Resource Name (ARN) of the IAM role that Lambda will assume when it executes your function.
     */
    role?: string;
    /**
     * The function execution time at which Lambda should terminate the function. Because the execution time has cost implications, we recommend you set this value based on your expected execution time. The default is 3 seconds.
     */
    timeout?: number;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateFunctionConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    functionConfiguration?: shared.FunctionConfiguration;
    /**
     * InvalidParameterValueException
     */
    invalidParameterValueException?: shared.InvalidParameterValueException;
    /**
     * ServiceException
     */
    serviceException?: shared.ServiceException;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: shared.ResourceNotFoundException;
}
