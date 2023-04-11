import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetFunctionConfigurationRequest extends SpeakeasyBase {
    /**
     * The name of the Lambda function for which you want to retrieve the configuration information.
     */
    functionName: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetFunctionConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    functionConfiguration?: shared.FunctionConfiguration;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: shared.ResourceNotFoundException;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceException
     */
    serviceException?: shared.ServiceException;
}
