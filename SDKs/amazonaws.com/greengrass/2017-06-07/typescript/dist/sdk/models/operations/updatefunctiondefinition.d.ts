import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateFunctionDefinitionRequestBody extends SpeakeasyBase {
    /**
     * The name of the definition.
     */
    name?: string;
}
export declare class UpdateFunctionDefinitionRequest extends SpeakeasyBase {
    /**
     * The ID of the Lambda function definition.
     */
    functionDefinitionId: string;
    requestBody: UpdateFunctionDefinitionRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateFunctionDefinitionResponse extends SpeakeasyBase {
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
    updateFunctionDefinitionResponse?: Record<string, any>;
}
