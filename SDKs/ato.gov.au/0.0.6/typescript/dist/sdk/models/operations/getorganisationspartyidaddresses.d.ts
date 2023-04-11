import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetOrganisationsPartyIdAddressesRequest extends SpeakeasyBase {
    /**
     * The API key.
     */
    apiKey: string;
    /**
     * The party identifier.
     */
    partyId: string;
}
export declare class GetOrganisationsPartyIdAddressesResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Addresses were retrieved successfully
     */
    addresses?: shared.Address[];
    /**
     * The specified resource was not found
     */
    notFound?: shared.NotFound;
    /**
     * Request not authenticated due to missing, invalid, or expired token
     */
    unauthenticated?: shared.Unauthenticated;
}
