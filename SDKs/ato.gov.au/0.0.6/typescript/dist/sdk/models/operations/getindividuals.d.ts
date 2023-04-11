import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetIndividualsRequest extends SpeakeasyBase {
    /**
     * The API key.
     */
    apiKey: string;
    /**
     * The individual's date of birth, for example, `1979-01-13` (in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format).
     */
    dateOfBirth?: string;
    /**
     * The individual's place of birth, for example, `Tamworth`.
     */
    placeOfBirth?: string;
}
export declare class GetIndividualsResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A list of individuals was retrieved successfully
     */
    individuals?: shared.Individual[];
    /**
     * The specified resource was not found
     */
    notFound?: shared.NotFound;
    /**
     * Request not authenticated due to missing, invalid, or expired token
     */
    unauthenticated?: shared.Unauthenticated;
}
