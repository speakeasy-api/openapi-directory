import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class Destiny2SearchDestinyEntitiesRequest extends SpeakeasyBase {
    /**
     * Page number to return, starting with 0.
     */
    page?: number;
    /**
     * The string to use when searching for Destiny entities.
     */
    searchTerm: string;
    /**
     * The type of entity for whom you would like results. These correspond to the entity's definition contract name. For instance, if you are looking for items, this property should be 'DestinyInventoryItemDefinition'.
     */
    type: string;
}
/**
 * The results of a search for Destiny content. This will be improved on over time, I've been doing some experimenting to see what might be useful.
 */
export declare class Destiny2SearchDestinyEntities200Wildcard extends SpeakeasyBase {
    detailedErrorTrace?: string;
    errorCode?: number;
    errorStatus?: string;
    message?: string;
    messageData?: Record<string, string>;
    /**
     * The results of a search for Destiny content. This will be improved on over time, I've been doing some experimenting to see what might be useful.
     */
    response?: shared.DestinyDefinitionsDestinyEntitySearchResult;
    throttleSeconds?: number;
}
export declare class Destiny2SearchDestinyEntitiesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
