import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FunctionsCreateExecutionSecurity extends SpeakeasyBase {
    jwt: string;
    project: string;
}
export declare class FunctionsCreateExecutionRequestBody extends SpeakeasyBase {
    /**
     * String of custom data to send to function.
     */
    data?: string;
}
export declare class FunctionsCreateExecutionRequest extends SpeakeasyBase {
    requestBody?: FunctionsCreateExecutionRequestBody;
    /**
     * Function unique ID.
     */
    functionId: string;
}
export declare class FunctionsCreateExecutionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Execution
     */
    execution?: shared.Execution;
}
