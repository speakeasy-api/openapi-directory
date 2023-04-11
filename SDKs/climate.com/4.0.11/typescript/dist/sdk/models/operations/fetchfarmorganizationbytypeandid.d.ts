import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FetchFarmOrganizationByTypeAndIdSecurity extends SpeakeasyBase {
    apiKey?: string;
    oauth2AuthorizationCode?: string;
}
export declare class FetchFarmOrganizationByTypeAndIdRequest extends SpeakeasyBase {
    /**
     * Unique identifier of the farm organization.
     */
    farmOrganizationId: string;
    /**
     * Type of the farm organization.
     */
    farmOrganizationType: shared.FarmOrganizationTypeEnum;
}
export declare class FetchFarmOrganizationByTypeAndIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Input
     */
    error?: shared.ErrorT;
    /**
     * Returns the requested farm organization.
     */
    farmOrganization?: shared.FarmOrganization;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
