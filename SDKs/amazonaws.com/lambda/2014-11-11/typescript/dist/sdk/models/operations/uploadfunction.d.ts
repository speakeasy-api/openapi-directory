import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * How the Lambda function will be invoked. Lambda supports only the "event" mode.
 */
export declare enum UploadFunctionModeEnum {
    Event = "event"
}
export declare class UploadFunctionRequestBody extends SpeakeasyBase {
    /**
     * A .zip file containing your packaged source code. For more information about creating a .zip file, go to <a href="http://docs.aws.amazon.com/lambda/latest/dg/walkthrough-custom-events.html">AWS LambdaL How it Works</a> in the AWS Lambda Developer Guide.
     */
    functionZip: string;
}
/**
 * The runtime environment for the Lambda function you are uploading. Currently, Lambda supports only "nodejs" as the runtime.
 */
export declare enum UploadFunctionRuntimeEnum {
    Nodejs = "nodejs"
}
export declare class UploadFunctionRequest extends SpeakeasyBase {
    /**
     * A short, user-defined function description. Lambda does not use this value. Assign a meaningful description as you see fit.
     */
    description?: string;
    /**
     * The name you want to assign to the function you are uploading. The function names appear in the console and are returned in the <a>ListFunctions</a> API. Function names are used to specify functions to other AWS Lambda APIs, such as <a>InvokeAsync</a>.
     */
    functionName: string;
    /**
     * The function that Lambda calls to begin execution. For Node.js, it is the <i>module-name</i>.<i>export</i> value in your function.
     */
    handler: string;
    /**
     * The amount of memory, in MB, your Lambda function is given. Lambda uses this memory size to infer the amount of CPU allocated to your function. Your function use-case determines your CPU and memory requirements. For example, database operation might need less memory compared to image processing function. The default value is 128 MB. The value must be a multiple of 64 MB.
     */
    memorySize?: number;
    /**
     * How the Lambda function will be invoked. Lambda supports only the "event" mode.
     */
    mode: UploadFunctionModeEnum;
    requestBody: UploadFunctionRequestBody;
    /**
     * The Amazon Resource Name (ARN) of the IAM role that Lambda assumes when it executes your function to access any other Amazon Web Services (AWS) resources.
     */
    role: string;
    /**
     * The runtime environment for the Lambda function you are uploading. Currently, Lambda supports only "nodejs" as the runtime.
     */
    runtime: UploadFunctionRuntimeEnum;
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
export declare class UploadFunctionResponse extends SpeakeasyBase {
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
