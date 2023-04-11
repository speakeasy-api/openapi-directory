import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostOrganisationsPartyIdRolesRequest extends SpeakeasyBase {
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
}
export declare class PostOrganisationsPartyIdRolesResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The client specified an invalid argument
     */
    invalidArgument?: shared.InvalidArgument;
    /**
     * Role was created
     */
    partyRole?: shared.PartyRole;
    /**
     * Request not authenticated due to missing, invalid, or expired token
     */
    unauthenticated?: shared.Unauthenticated;
}
