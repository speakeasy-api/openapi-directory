import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostOrganisationsPartyIdLicensesRequest extends SpeakeasyBase {
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
}
export declare class PostOrganisationsPartyIdLicensesResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The client specified an invalid argument
     */
    invalidArgument?: shared.InvalidArgument;
    /**
     * License was created
     */
    license?: shared.License;
    /**
     * Request not authenticated due to missing, invalid, or expired token
     */
    unauthenticated?: shared.Unauthenticated;
}
