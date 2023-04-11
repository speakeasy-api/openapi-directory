import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutIndividualsPartyIdRolesRoleIdRequest extends SpeakeasyBase {
    /**
     * The API key.
     */
    apiKey: string;
    /**
     * Role resource
     */
    partyRoleInput: shared.PartyRoleInput;
    /**
     * The party identifier.
     */
    partyId: string;
    /**
     * The role identifier.
     */
    roleId: string;
}
export declare class PutIndividualsPartyIdRolesRoleIdResponse extends SpeakeasyBase {
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
     * Role was updated
     */
    partyRole?: shared.PartyRole;
    /**
     * Request not authenticated due to missing, invalid, or expired token
     */
    unauthenticated?: shared.Unauthenticated;
}
