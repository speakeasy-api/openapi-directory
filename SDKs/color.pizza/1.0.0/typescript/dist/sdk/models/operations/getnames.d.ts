import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetNamesRequest extends SpeakeasyBase {
    /**
     * The name of the color name list to use
     */
    list?: shared.PossibleListsEnum;
    /**
     * The name of the color to retrieve (min 3 characters)
     */
    name: string;
}
/**
 * OK
 */
export declare class GetNames200ApplicationJSON extends SpeakeasyBase {
    colors?: shared.Color[];
    paletteTitle?: string;
}
export declare class GetNamesResponse extends SpeakeasyBase {
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
    getNames200ApplicationJSONObject?: GetNames200ApplicationJSON;
}
