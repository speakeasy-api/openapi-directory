import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetClassificationsGendersRequest extends SpeakeasyBase {
    /**
     * The API key.
     */
    apiKey: string;
}
export declare class GetClassificationsGendersResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Genders were retrieved successfully
     */
    genders?: shared.Gender[];
    /**
     * The specified resource was not found
     */
    notFound?: shared.NotFound;
    /**
     * Request not authenticated due to missing, invalid, or expired token
     */
    unauthenticated?: shared.Unauthenticated;
}
