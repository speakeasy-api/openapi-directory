import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RegistryUpdateApiRequest extends SpeakeasyBase {
    apiInput: shared.ApiInput;
    /**
     * If set to true, and the api is not found, a new api_versions will be created. In this situation, `update_mask` is ignored.
     */
    allowMissing?: boolean;
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
     * The list of fields to be updated. If omitted, all fields are updated that are set in the request message (fields set to default values are ignored). If a "*" is specified, all fields are updated, including fields that are unspecified/default in the request.
     */
    updateMask?: string;
}
export declare class RegistryUpdateApiResponse extends SpeakeasyBase {
    /**
     * OK
     */
    api?: shared.Api;
    contentType: string;
    /**
     * Default error response
     */
    status?: shared.Status;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
