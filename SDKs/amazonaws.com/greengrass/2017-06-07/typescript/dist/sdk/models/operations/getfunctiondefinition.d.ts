import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetFunctionDefinitionRequest extends SpeakeasyBase {
    /**
     * The ID of the Lambda function definition.
     */
    functionDefinitionId: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetFunctionDefinitionResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * Success
     */
    getFunctionDefinitionResponse?: shared.GetFunctionDefinitionResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
