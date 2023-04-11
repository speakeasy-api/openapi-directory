import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostIndividualsRequest extends SpeakeasyBase {
    /**
     * The API key.
     */
    apiKey: string;
    /**
     * Individual resource
     */
    individualInput: shared.IndividualInput;
}
export declare class PostIndividualsResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Individual was created
     */
    individual?: shared.Individual;
    /**
     * The client specified an invalid argument
     */
    invalidArgument?: shared.InvalidArgument;
    /**
     * Request not authenticated due to missing, invalid, or expired token
     */
    unauthenticated?: shared.Unauthenticated;
}
