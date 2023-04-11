import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateLoggerDefinitionVersionRequestBody extends SpeakeasyBase {
    /**
     * A list of loggers.
     */
    loggers?: shared.Logger[];
}
export declare class CreateLoggerDefinitionVersionRequest extends SpeakeasyBase {
    /**
     * The ID of the logger definition.
     */
    loggerDefinitionId: string;
    requestBody: CreateLoggerDefinitionVersionRequestBody;
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
export declare class CreateLoggerDefinitionVersionResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * Success
     */
    createLoggerDefinitionVersionResponse?: shared.CreateLoggerDefinitionVersionResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
