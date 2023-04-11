import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetLists200ApplicationJSONListDescriptions extends SpeakeasyBase {
    basic?: shared.ListDescription;
    bestOf?: shared.ListDescription;
    chineseTraditional?: shared.ListDescription;
    default?: shared.ListDescription;
    french?: shared.ListDescription;
    html?: shared.ListDescription;
    japaneseTraditional?: shared.ListDescription;
    leCorbusier?: shared.ListDescription;
    nbsIscc?: shared.ListDescription;
    ntc?: shared.ListDescription;
    osxcrayons?: shared.ListDescription;
    ral?: shared.ListDescription;
    ridgway?: shared.ListDescription;
    risograph?: shared.ListDescription;
    sanzoWadaI?: shared.ListDescription;
    thesaurus?: shared.ListDescription;
    werner?: shared.ListDescription;
    wikipedia?: shared.ListDescription;
    windows?: shared.ListDescription;
    x11?: shared.ListDescription;
    xkcd?: shared.ListDescription;
}
/**
 * OK
 */
export declare class GetLists200ApplicationJSON extends SpeakeasyBase {
    listDescriptions?: GetLists200ApplicationJSONListDescriptions;
    localAvailableColorNameLists?: string[];
}
export declare class GetListsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * NOT FOUND
     */
    error?: shared.ErrorT;
    /**
     * OK
     */
    getLists200ApplicationJSONObject?: GetLists200ApplicationJSON;
}
