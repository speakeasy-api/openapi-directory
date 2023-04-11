import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Type of domain ("system"/"go"/"personal"/"dedicated"). If not specified default is "system"
 */
export declare enum DomainsGetTypeEnum {
    System = "system",
    Go = "go",
    Personal = "personal",
    Dedicated = "dedicated"
}
export declare class DomainsGetRequest extends SpeakeasyBase {
    /**
     * Limit results to this number
     */
    limit?: number;
    /**
     * Filter domains with this anmen
     */
    name?: string;
    /**
     * Offset where to start from
     */
    offset?: number;
    /**
     * Type of domain ("system"/"go"/"personal"/"dedicated"). If not specified default is "system"
     */
    type?: DomainsGetTypeEnum;
}
export declare class DomainsGetResponse extends SpeakeasyBase {
    apiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64?: shared.ApiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
