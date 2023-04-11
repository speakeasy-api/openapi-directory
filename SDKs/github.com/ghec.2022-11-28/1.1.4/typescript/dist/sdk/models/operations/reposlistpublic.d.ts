import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReposListPublicRequest extends SpeakeasyBase {
    /**
     * A repository ID. Only return repositories with an ID greater than this ID.
     */
    since?: number;
}
export declare class ReposListPublicResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    minimalRepositories?: shared.MinimalRepository[];
    /**
     * Validation failed, or the endpoint has been spammed.
     */
    validationError?: shared.ValidationError;
}
