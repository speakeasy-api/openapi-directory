import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRequest extends SpeakeasyBase {
    /**
     * The name of the color name list to use
     */
    list?: shared.PossibleListsEnum;
    /**
     * Allow duplicate names or not
     */
    noduplicates?: boolean;
    /**
     * The hex values of the colors to retrieve without '#'
     */
    values?: string;
}
/**
 * OK
 */
export declare class Get200ApplicationJSON extends SpeakeasyBase {
    colors?: shared.Color[];
    paletteTitle?: string;
}
export declare class GetResponse extends SpeakeasyBase {
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
    get200ApplicationJSONObject?: Get200ApplicationJSON;
}
