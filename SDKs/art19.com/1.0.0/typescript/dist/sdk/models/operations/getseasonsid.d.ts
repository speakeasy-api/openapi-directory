import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSeasonsIdSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class GetSeasonsIdRequest extends SpeakeasyBase {
    /**
     * The ID of the season resource to load.
     */
    id: string;
}
/**
 * Success
 */
export declare class GetSeasonsId200ApplicationVndApiPlusJson extends SpeakeasyBase {
    data?: shared.Season;
    /**
     * Links related to the retrieved resource
     */
    links?: shared.ResourceLink;
}
export declare class GetSeasonsIdResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    getSeasonsId200ApplicationVndApiPlusJsonObject?: GetSeasonsId200ApplicationVndApiPlusJson;
}
