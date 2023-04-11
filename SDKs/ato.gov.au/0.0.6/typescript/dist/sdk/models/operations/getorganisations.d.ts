import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetOrganisationsRequest extends SpeakeasyBase {
    /**
     * The API key.
     */
    apiKey: string;
    /**
     * The identifier, for example, `123456789`.
     */
    identifier?: string;
    /**
     * The registered identifier, for example, `ACN` or `ABN`.
     */
    registeredIdentifier?: string;
}
export declare class GetOrganisationsResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The specified resource was not found
     */
    notFound?: shared.NotFound;
    /**
     * A list of organisations was retrieved successfully
     */
    organisations?: shared.Organisation[];
    /**
     * Request not authenticated due to missing, invalid, or expired token
     */
    unauthenticated?: shared.Unauthenticated;
}
