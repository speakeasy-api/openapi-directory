import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RegistryGetApiRequest extends SpeakeasyBase {
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
}
export declare class RegistryGetApiResponse extends SpeakeasyBase {
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
