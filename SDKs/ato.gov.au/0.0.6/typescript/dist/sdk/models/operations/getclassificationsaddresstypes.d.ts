import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetClassificationsAddressTypesRequest extends SpeakeasyBase {
    /**
     * The API key.
     */
    apiKey: string;
}
export declare class GetClassificationsAddressTypesResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Address types were retrieved successfully
     */
    addressTypes?: shared.AddressType[];
    /**
     * The specified resource was not found
     */
    notFound?: shared.NotFound;
    /**
     * Request not authenticated due to missing, invalid, or expired token
     */
    unauthenticated?: shared.Unauthenticated;
}
