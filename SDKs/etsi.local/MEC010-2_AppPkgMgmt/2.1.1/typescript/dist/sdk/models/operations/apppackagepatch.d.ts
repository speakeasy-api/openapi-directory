import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AppPackagePATCHRequest extends SpeakeasyBase {
    /**
     * Operational state to be set
     */
    appPkgInfoModifications: shared.AppPkgInfoModifications;
    /**
     * Identifier of an individual application package resource
     */
    appPkgId: string;
}
export declare class AppPackagePATCHResponse extends SpeakeasyBase {
    /**
     * Shows that the operation has been completed successfully
     */
    appPkgInfoModifications?: shared.AppPkgInfoModifications;
    contentType: string;
    /**
     * Bad Request : used to indicate that incorrect parameters were passed to the request.
     */
    problemDetails?: shared.ProblemDetails;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
