import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetIndividualsPartyIdAddressesAddressIdRequest extends SpeakeasyBase {
    /**
     * The address identifier.
     */
    addressId: string;
    /**
     * The API key.
     */
    apiKey: string;
    /**
     * The party identifier.
     */
    partyId: string;
}
export declare class GetIndividualsPartyIdAddressesAddressIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Address was retrieved successfully
     */
    address?: shared.Address;
    /**
     * The specified resource was not found
     */
    notFound?: shared.NotFound;
    /**
     * Request not authenticated due to missing, invalid, or expired token
     */
    unauthenticated?: shared.Unauthenticated;
}
