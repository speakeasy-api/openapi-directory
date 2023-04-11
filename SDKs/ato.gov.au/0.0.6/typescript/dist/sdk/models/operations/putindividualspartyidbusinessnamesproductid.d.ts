import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutIndividualsPartyIdBusinessNamesProductIdRequest extends SpeakeasyBase {
    /**
     * The API key.
     */
    apiKey: string;
    /**
     * Business Name resource
     */
    businessNameInput: shared.BusinessNameInput;
    /**
     * The party identifier.
     */
    partyId: string;
    /**
     * The product identifier.
     */
    productId: string;
}
export declare class PutIndividualsPartyIdBusinessNamesProductIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Address was updated
     */
    businessName?: shared.BusinessName;
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
