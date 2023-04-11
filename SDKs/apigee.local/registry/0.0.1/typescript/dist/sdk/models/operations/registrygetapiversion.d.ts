import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RegistryGetApiVersionRequest extends SpeakeasyBase {
    /**
     * The api id.
     */
    api: string;
    /**
     * The location id.
     */
    location: string;
    /**
     * The project id.
     */
    project: string;
    /**
     * The version id.
     */
    version: string;
}
export declare class RegistryGetApiVersionResponse extends SpeakeasyBase {
    /**
     * OK
     */
    apiVersion?: shared.ApiVersion;
    contentType: string;
    /**
     * Default error response
     */
    status?: shared.Status;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
