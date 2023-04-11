import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class OrgsListAppInstallationsRequest extends SpeakeasyBase {
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
    /**
     * Page number of the results to fetch.
     */
    page?: number;
    /**
     * The number of results per page (max 100).
     */
    perPage?: number;
}
/**
 * Response
 */
export declare class OrgsListAppInstallations200ApplicationJSON extends SpeakeasyBase {
    installations: shared.Installation[];
    totalCount: number;
}
export declare class OrgsListAppInstallationsResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    orgsListAppInstallations200ApplicationJSONObject?: OrgsListAppInstallations200ApplicationJSON;
}
