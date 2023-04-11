import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListSitesRequest extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    /**
     * Filters the results by city.
     */
    operatingAddressCityFilter?: string[];
    /**
     * Filters the results by country code.
     */
    operatingAddressCountryCodeFilter?: string[];
    /**
     * Filters the results by state or region.
     */
    operatingAddressStateOrRegionFilter?: string[];
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListSitesResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * Success
     */
    listSitesOutput?: shared.ListSitesOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
