import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetIndividualsPartyIdBusinessNamesRequest extends SpeakeasyBase {
    /**
     * The API key.
     */
    apiKey: string;
    /**
     * The party identifier.
     */
    partyId: string;
}
export declare class GetIndividualsPartyIdBusinessNamesResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Business Names were retrieved successfully
     */
    businessNames?: shared.BusinessName[];
    /**
     * The specified resource was not found
     */
    notFound?: shared.NotFound;
    /**
     * Request not authenticated due to missing, invalid, or expired token
     */
    unauthenticated?: shared.Unauthenticated;
}
