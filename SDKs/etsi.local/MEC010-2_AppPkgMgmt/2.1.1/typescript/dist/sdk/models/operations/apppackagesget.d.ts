import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AppPackagesGETRequest extends SpeakeasyBase {
    /**
     * Include all complex attributes in the response.
     */
    allFields?: string;
    /**
     * Indicates to exclude the following complex attributes of AppPkgInfo from the response.
     */
    excludeDefault?: string;
    /**
     * Complex attributes of AppPkgInfo to be excluded from the response.
     */
    excludeFields?: string;
    /**
     * Complex attributes of AppPkgInfo to be included into the response
     */
    fields?: string;
    /**
     * Attribute-based filtering parameters according to ETSI GS MEC 009
     */
    filter?: string;
}
export declare class AppPackagesGETResponse extends SpeakeasyBase {
    /**
     * Contains a representation of the application package resource
     */
    appPkgInfos?: shared.AppPkgInfo[];
    contentType: string;
    /**
     * Bad Request : used to indicate that incorrect parameters were passed to the request.
     */
    problemDetails?: shared.ProblemDetails;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
