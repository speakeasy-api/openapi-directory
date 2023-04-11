import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class Destiny2GetItemRequest extends SpeakeasyBase {
    /**
     * A comma separated list of components to return (as strings or numeric values). See the DestinyComponentType enum for valid components to request. You must request at least one component to receive results.
     */
    components?: number[];
    /**
     * The membership ID of the destiny profile.
     */
    destinyMembershipId: number;
    /**
     * The Instance ID of the destiny item.
     */
    itemInstanceId: number;
    /**
     * A valid non-BungieNet membership type.
     */
    membershipType: number;
}
/**
 * The response object for retrieving an individual instanced item. None of these components are relevant for an item that doesn't have an "itemInstanceId": for those, get your information from the DestinyInventoryDefinition.
 */
export declare class Destiny2GetItem200Wildcard extends SpeakeasyBase {
    detailedErrorTrace?: string;
    errorCode?: number;
    errorStatus?: string;
    message?: string;
    messageData?: Record<string, string>;
    /**
     * The response object for retrieving an individual instanced item. None of these components are relevant for an item that doesn't have an "itemInstanceId": for those, get your information from the DestinyInventoryDefinition.
     */
    response?: shared.DestinyResponsesDestinyItemResponse;
    throttleSeconds?: number;
}
export declare class Destiny2GetItemResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
