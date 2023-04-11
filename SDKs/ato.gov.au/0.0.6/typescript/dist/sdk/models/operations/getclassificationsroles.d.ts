import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetClassificationsRolesRequest extends SpeakeasyBase {
    /**
     * The API key.
     */
    apiKey: string;
}
export declare class GetClassificationsRolesResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The specified resource was not found
     */
    notFound?: shared.NotFound;
    /**
     * Roles were retrieved successfully
     */
    roles?: shared.Role[];
    /**
     * Request not authenticated due to missing, invalid, or expired token
     */
    unauthenticated?: shared.Unauthenticated;
}
