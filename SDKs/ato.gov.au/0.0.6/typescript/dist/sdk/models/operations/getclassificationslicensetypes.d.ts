import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetClassificationsLicenseTypesRequest extends SpeakeasyBase {
    /**
     * The API key.
     */
    apiKey: string;
}
export declare class GetClassificationsLicenseTypesResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * License types were retrieved successfully
     */
    licenseTypes?: shared.LicenseType[];
    /**
     * The specified resource was not found
     */
    notFound?: shared.NotFound;
    /**
     * Request not authenticated due to missing, invalid, or expired token
     */
    unauthenticated?: shared.Unauthenticated;
}
