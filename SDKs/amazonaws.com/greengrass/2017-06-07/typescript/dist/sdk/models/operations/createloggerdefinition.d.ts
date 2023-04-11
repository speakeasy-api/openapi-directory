import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Information about a logger definition version.
 */
export declare class CreateLoggerDefinitionRequestBodyInitialVersion extends SpeakeasyBase {
    loggers?: shared.Logger[];
}
export declare class CreateLoggerDefinitionRequestBody extends SpeakeasyBase {
    /**
     * Information about a logger definition version.
     */
    initialVersion?: CreateLoggerDefinitionRequestBodyInitialVersion;
    /**
     * The name of the logger definition.
     */
    name?: string;
    /**
     * The key-value pair for the resource tag.
     */
    tags?: Record<string, string>;
}
export declare class CreateLoggerDefinitionRequest extends SpeakeasyBase {
    requestBody: CreateLoggerDefinitionRequestBody;
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
export declare class CreateLoggerDefinitionResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * Success
     */
    createLoggerDefinitionResponse?: shared.CreateLoggerDefinitionResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
