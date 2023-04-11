import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostIndividualsPartyIdElectronicAddressesRequest extends SpeakeasyBase {
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
export declare class PostIndividualsPartyIdElectronicAddressesResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Electronic Address was created
     */
    electronicAddress?: shared.ElectronicAddress;
    /**
     * The client specified an invalid argument
     */
    invalidArgument?: shared.InvalidArgument;
    /**
     * Request not authenticated due to missing, invalid, or expired token
     */
    unauthenticated?: shared.Unauthenticated;
}
