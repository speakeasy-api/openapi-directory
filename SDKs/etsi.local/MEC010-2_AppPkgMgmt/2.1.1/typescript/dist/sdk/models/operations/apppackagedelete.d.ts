import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AppPackageDELETERequest extends SpeakeasyBase {
    /**
     * Identifier of an individual application package resource
     */
    appPkgId: string;
}
export declare class AppPackageDELETEResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request : used to indicate that incorrect parameters were passed to the request.
     */
    problemDetails?: shared.ProblemDetails;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
