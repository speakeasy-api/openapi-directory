import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AppPkgGETRequest extends SpeakeasyBase {
    /**
     * Identifier of an on-boarded individual application package
     */
    appPkgId: string;
}
export declare class AppPkgGETResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request : used to indicate that incorrect parameters were passed to the request.
     */
    problemDetails?: shared.ProblemDetails;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
