import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetLoggerDefinitionRequest extends SpeakeasyBase {
    /**
     * The ID of the logger definition.
     */
    loggerDefinitionId: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetLoggerDefinitionResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * Success
     */
    getLoggerDefinitionResponse?: shared.GetLoggerDefinitionResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
