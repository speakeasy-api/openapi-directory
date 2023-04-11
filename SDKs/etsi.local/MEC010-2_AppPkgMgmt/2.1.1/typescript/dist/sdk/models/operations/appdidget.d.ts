import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AppDIdGETRequest extends SpeakeasyBase {
    /**
     * Identifier of an application descriptor
     */
    appDId: string;
}
export declare class AppDIdGETResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request : used to indicate that incorrect parameters were passed to the request.
     */
    problemDetails?: shared.ProblemDetails;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
