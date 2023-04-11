import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateLoggerDefinitionRequestBody extends SpeakeasyBase {
    /**
     * The name of the definition.
     */
    name?: string;
}
export declare class UpdateLoggerDefinitionRequest extends SpeakeasyBase {
    /**
     * The ID of the logger definition.
     */
    loggerDefinitionId: string;
    requestBody: UpdateLoggerDefinitionRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateLoggerDefinitionResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateLoggerDefinitionResponse?: Record<string, any>;
}
