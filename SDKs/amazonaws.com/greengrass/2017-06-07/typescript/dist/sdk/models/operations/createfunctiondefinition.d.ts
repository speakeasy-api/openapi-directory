import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Information about a function definition version.
 */
export declare class CreateFunctionDefinitionRequestBodyInitialVersion extends SpeakeasyBase {
    defaultConfig?: shared.FunctionDefaultConfig;
    functions?: shared.FunctionT[];
}
export declare class CreateFunctionDefinitionRequestBody extends SpeakeasyBase {
    /**
     * Information about a function definition version.
     */
    initialVersion?: CreateFunctionDefinitionRequestBodyInitialVersion;
    /**
     * The name of the function definition.
     */
    name?: string;
    /**
     * The key-value pair for the resource tag.
     */
    tags?: Record<string, string>;
}
export declare class CreateFunctionDefinitionRequest extends SpeakeasyBase {
    requestBody: CreateFunctionDefinitionRequestBody;
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
export declare class CreateFunctionDefinitionResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * Success
     */
    createFunctionDefinitionResponse?: shared.CreateFunctionDefinitionResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
