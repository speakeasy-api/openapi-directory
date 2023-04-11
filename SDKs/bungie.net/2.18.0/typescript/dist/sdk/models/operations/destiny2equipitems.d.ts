import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The results of a bulk Equipping operation performed through the Destiny API.
 */
export declare class Destiny2EquipItems200Wildcard extends SpeakeasyBase {
    detailedErrorTrace?: string;
    errorCode?: number;
    errorStatus?: string;
    message?: string;
    messageData?: Record<string, string>;
    /**
     * The results of a bulk Equipping operation performed through the Destiny API.
     */
    response?: shared.DestinyDestinyEquipItemResults;
    throttleSeconds?: number;
}
export declare class Destiny2EquipItemsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
