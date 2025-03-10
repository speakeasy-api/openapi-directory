import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RegistryRollbackApiSpecRequest extends SpeakeasyBase {
    rollbackApiSpecRequest: shared.RollbackApiSpecRequest;
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
     * The spec id.
     */
    spec: string;
    /**
     * The version id.
     */
    version: string;
}
export declare class RegistryRollbackApiSpecResponse extends SpeakeasyBase {
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
