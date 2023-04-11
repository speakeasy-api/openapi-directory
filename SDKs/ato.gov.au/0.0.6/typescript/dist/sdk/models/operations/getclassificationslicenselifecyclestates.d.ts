import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetClassificationsLicenseLifecycleStatesRequest extends SpeakeasyBase {
    /**
     * The API key.
     */
    apiKey: string;
}
export declare class GetClassificationsLicenseLifecycleStatesResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * License lifecycle states were retrieved successfully
     */
    licenseLifecycleStates?: shared.LicenseLifecycleState[];
    /**
     * The specified resource was not found
     */
    notFound?: shared.NotFound;
    /**
     * Request not authenticated due to missing, invalid, or expired token
     */
    unauthenticated?: shared.Unauthenticated;
}
