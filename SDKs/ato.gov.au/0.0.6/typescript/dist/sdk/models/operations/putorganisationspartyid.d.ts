import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutOrganisationsPartyIdRequest extends SpeakeasyBase {
    /**
     * The API key.
     */
    apiKey: string;
    /**
     * Organisation resource
     */
    organisationInput: shared.OrganisationInput;
    /**
     * The party identifier.
     */
    partyId: string;
}
export declare class PutOrganisationsPartyIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The client specified an invalid argument
     */
    invalidArgument?: shared.InvalidArgument;
    /**
     * The specified resource was not found
     */
    notFound?: shared.NotFound;
    /**
     * Organisation was updated
     */
    organisation?: shared.Organisation;
    /**
     * Request not authenticated due to missing, invalid, or expired token
     */
    unauthenticated?: shared.Unauthenticated;
}
