import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class OrgsListAppInstallationsRequest extends SpeakeasyBase {
    /**
     * This API is under preview and subject to change.
     */
    accept: string;
    org: string;
    /**
     * Page number of the results to fetch.
     */
    page?: number;
    /**
     * Results per page (max 100)
     */
    perPage?: number;
}
/**
 * Response
 */
export declare class OrgsListAppInstallations200ApplicationJSON extends SpeakeasyBase {
    installations: shared.InstallationGhes2[];
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
