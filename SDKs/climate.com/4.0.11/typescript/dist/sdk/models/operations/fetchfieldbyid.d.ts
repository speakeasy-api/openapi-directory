import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FetchFieldByIdSecurity extends SpeakeasyBase {
    apiKey?: string;
    oauth2AuthorizationCode?: string;
}
export declare class FetchFieldByIdRequest extends SpeakeasyBase {
    /**
     * Unique identifier of the Field.
     */
    fieldId: string;
}
export declare class FetchFieldByIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Input
     */
    error?: shared.ErrorT;
    /**
     * Returns the requested Field.
     */
    field?: shared.Field;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
