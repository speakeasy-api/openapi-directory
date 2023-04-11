import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AppPackageGETRequest extends SpeakeasyBase {
    /**
     * Identifier of an individual application package resource
     */
    appPkgId: string;
}
export declare class AppPackageGETResponse extends SpeakeasyBase {
    /**
     * Contains a representation of the application package resource
     */
    appPkgInfo?: shared.AppPkgInfo;
    contentType: string;
    /**
     * Bad Request : used to indicate that incorrect parameters were passed to the request.
     */
    problemDetails?: shared.ProblemDetails;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
