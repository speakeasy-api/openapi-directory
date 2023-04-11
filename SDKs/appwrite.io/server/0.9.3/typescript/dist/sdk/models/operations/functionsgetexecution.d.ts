import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FunctionsGetExecutionSecurity extends SpeakeasyBase {
    jwt: string;
    key: string;
    project: string;
}
export declare class FunctionsGetExecutionRequest extends SpeakeasyBase {
    /**
     * Execution unique ID.
     */
    executionId: string;
    /**
     * Function unique ID.
     */
    functionId: string;
}
export declare class FunctionsGetExecutionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Execution
     */
    execution?: shared.Execution;
}
