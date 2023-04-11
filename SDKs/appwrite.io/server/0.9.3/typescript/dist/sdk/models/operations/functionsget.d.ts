import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FunctionsGetSecurity extends SpeakeasyBase {
    key: string;
    project: string;
}
export declare class FunctionsGetRequest extends SpeakeasyBase {
    /**
     * Function unique ID.
     */
    functionId: string;
}
export declare class FunctionsGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Function
     */
    function?: shared.FunctionT;
}
