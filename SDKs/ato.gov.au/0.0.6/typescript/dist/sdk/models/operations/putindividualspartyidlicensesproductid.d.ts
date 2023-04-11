import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutIndividualsPartyIdLicensesProductIdRequest extends SpeakeasyBase {
    /**
     * The API key.
     */
    apiKey: string;
    /**
     * License resource
     */
    licenseInput: shared.LicenseInput;
    /**
     * The party identifier.
     */
    partyId: string;
    /**
     * The product identifier.
     */
    productId: string;
}
export declare class PutIndividualsPartyIdLicensesProductIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The client specified an invalid argument
     */
    invalidArgument?: shared.InvalidArgument;
    /**
     * License was updated
     */
    license?: shared.License;
    /**
     * The specified resource was not found
     */
    notFound?: shared.NotFound;
    /**
     * Request not authenticated due to missing, invalid, or expired token
     */
    unauthenticated?: shared.Unauthenticated;
}
