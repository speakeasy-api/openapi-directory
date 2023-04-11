import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class Destiny2GetCollectibleNodeDetailsRequest extends SpeakeasyBase {
    /**
     * The Destiny Character ID of the character for whom we're getting collectible detail info.
     */
    characterId: number;
    /**
     * The hash identifier of the Presentation Node for whom we should return collectible details. Details will only be returned for collectibles that are direct descendants of this node.
     */
    collectiblePresentationNodeHash: number;
    /**
     * A comma separated list of components to return (as strings or numeric values). See the DestinyComponentType enum for valid components to request. You must request at least one component to receive results.
     */
    components?: number[];
    /**
     * Destiny membership ID of another user. You may be denied.
     */
    destinyMembershipId: number;
    /**
     * A valid non-BungieNet membership type.
     */
    membershipType: number;
}
/**
 * Returns the detailed information about a Collectible Presentation Node and any Collectibles that are direct descendants.
 */
export declare class Destiny2GetCollectibleNodeDetails200Wildcard extends SpeakeasyBase {
    detailedErrorTrace?: string;
    errorCode?: number;
    errorStatus?: string;
    message?: string;
    messageData?: Record<string, string>;
    /**
     * Returns the detailed information about a Collectible Presentation Node and any Collectibles that are direct descendants.
     */
    response?: shared.DestinyResponsesDestinyCollectibleNodeDetailResponse;
    throttleSeconds?: number;
}
export declare class Destiny2GetCollectibleNodeDetailsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
