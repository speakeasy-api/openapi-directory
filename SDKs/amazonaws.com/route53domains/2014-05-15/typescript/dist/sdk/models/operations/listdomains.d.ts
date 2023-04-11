import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListDomainsXAmzTargetEnum {
    Route53DomainsV20140515ListDomains = "Route53Domains_v20140515.ListDomains"
}
export declare class ListDomainsRequest extends SpeakeasyBase {
    listDomainsRequest: shared.ListDomainsRequest;
    /**
     * Pagination token
     */
    marker?: string;
    /**
     * Pagination limit
     */
    maxItems?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListDomainsXAmzTargetEnum;
}
export declare class ListDomainsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidInput
     */
    invalidInput?: any;
    /**
     * Success
     */
    listDomainsResponse?: shared.ListDomainsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
