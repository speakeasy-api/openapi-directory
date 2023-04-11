import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FunctionsUpdateTagSecurity extends SpeakeasyBase {
    key: string;
    project: string;
}
export declare class FunctionsUpdateTagRequestBody extends SpeakeasyBase {
    /**
     * Tag unique ID.
     */
    tag: string;
}
export declare class FunctionsUpdateTagRequest extends SpeakeasyBase {
    requestBody?: FunctionsUpdateTagRequestBody;
    /**
     * Function unique ID.
     */
    functionId: string;
}
export declare class FunctionsUpdateTagResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Function
     */
    function?: shared.FunctionT;
}
