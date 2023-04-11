import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The default configuration that applies to all Lambda functions in the group. Individual Lambda functions can override these settings.
 */
export declare class CreateFunctionDefinitionVersionRequestBodyDefaultConfig extends SpeakeasyBase {
    /**
     * Configuration information that specifies how a Lambda function runs.
     */
    execution?: shared.FunctionDefaultExecutionConfig;
}
export declare class CreateFunctionDefinitionVersionRequestBody extends SpeakeasyBase {
    /**
     * The default configuration that applies to all Lambda functions in the group. Individual Lambda functions can override these settings.
     */
    defaultConfig?: CreateFunctionDefinitionVersionRequestBodyDefaultConfig;
    /**
     * A list of Lambda functions in this function definition version.
     */
    functions?: shared.FunctionT[];
}
export declare class CreateFunctionDefinitionVersionRequest extends SpeakeasyBase {
    /**
     * The ID of the Lambda function definition.
     */
    functionDefinitionId: string;
    requestBody: CreateFunctionDefinitionVersionRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * A client token used to correlate requests and responses.
     */
    xAmznClientToken?: string;
}
export declare class CreateFunctionDefinitionVersionResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * Success
     */
    createFunctionDefinitionVersionResponse?: shared.CreateFunctionDefinitionVersionResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
