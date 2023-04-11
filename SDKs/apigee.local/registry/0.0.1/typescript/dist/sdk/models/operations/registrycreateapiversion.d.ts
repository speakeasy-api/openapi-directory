import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RegistryCreateApiVersionRequest extends SpeakeasyBase {
    apiVersionInput: shared.ApiVersionInput;
    /**
     * The api id.
     */
    api: string;
    /**
     * Required. The ID to use for the version, which will become the final component of the version's resource name. This value should be 4-63 characters, and valid characters are /[a-z][0-9]-/. Following AIP-162, IDs must not have the form of a UUID.
     */
    apiVersionId?: string;
    /**
     * The location id.
     */
    location: string;
    /**
     * The project id.
     */
    project: string;
}
export declare class RegistryCreateApiVersionResponse extends SpeakeasyBase {
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
