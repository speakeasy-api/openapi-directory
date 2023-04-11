import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FunctionsUpdateSecurity extends SpeakeasyBase {
    key: string;
    project: string;
}
export declare class FunctionsUpdateRequestBody extends SpeakeasyBase {
    /**
     * Events list.
     */
    events?: string[];
    /**
     * An array of strings with execution permissions. By default no user is granted with any execute permissions. [learn more about permissions](/docs/permissions) and get a full list of available permissions.
     */
    execute: string[];
    /**
     * Function name. Max length: 128 chars.
     */
    name: string;
    /**
     * Schedule CRON syntax.
     */
    schedule?: string;
    /**
     * Function maximum execution time in seconds.
     */
    timeout?: number;
    /**
     * Key-value JSON object.
     */
    vars?: Record<string, any>;
}
export declare class FunctionsUpdateRequest extends SpeakeasyBase {
    requestBody?: FunctionsUpdateRequestBody;
    /**
     * Function unique ID.
     */
    functionId: string;
}
export declare class FunctionsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Function
     */
    function?: shared.FunctionT;
}
