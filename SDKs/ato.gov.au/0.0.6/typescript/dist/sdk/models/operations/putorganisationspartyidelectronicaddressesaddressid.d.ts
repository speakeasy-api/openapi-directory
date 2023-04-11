import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutOrganisationsPartyIdElectronicAddressesAddressIdRequest extends SpeakeasyBase {
    /**
     * The address identifier.
     */
    addressId: string;
    /**
     * The API key.
     */
    apiKey: string;
    /**
     * Electronic Address resource
     */
    electronicAddressInput: shared.ElectronicAddressInput;
    /**
     * The party identifier.
     */
    partyId: string;
}
export declare class PutOrganisationsPartyIdElectronicAddressesAddressIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Electronic Address was updated
     */
    electronicAddress?: shared.ElectronicAddress;
    /**
     * The client specified an invalid argument
     */
    invalidArgument?: shared.InvalidArgument;
    /**
     * The specified resource was not found
     */
    notFound?: shared.NotFound;
    /**
     * Request not authenticated due to missing, invalid, or expired token
     */
    unauthenticated?: shared.Unauthenticated;
}
