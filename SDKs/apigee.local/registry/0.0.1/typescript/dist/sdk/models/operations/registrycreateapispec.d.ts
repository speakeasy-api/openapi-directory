import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RegistryCreateApiSpecRequest extends SpeakeasyBase {
    apiSpecInput: shared.ApiSpecInput;
    /**
     * The api id.
     */
    api: string;
    /**
     * Required. The ID to use for the spec, which will become the final component of the spec's resource name. This value should be 4-63 characters, and valid characters are /[a-z][0-9]-/. Following AIP-162, IDs must not have the form of a UUID.
     */
    apiSpecId?: string;
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
export declare class RegistryCreateApiSpecResponse extends SpeakeasyBase {
    /**
     * OK
     */
    apiSpec?: shared.ApiSpecOutput;
    contentType: string;
    /**
     * Default error response
     */
    status?: shared.Status;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
