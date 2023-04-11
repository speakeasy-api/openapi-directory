import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetEpisodesIdSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class GetEpisodesIdRequest extends SpeakeasyBase {
    /**
     * The ID of the episode resource to load.
     */
    id: string;
}
/**
 * Success
 */
export declare class GetEpisodesId200ApplicationVndApiPlusJson extends SpeakeasyBase {
    data?: shared.Episode;
    /**
     * Links related to the retrieved resource
     */
    links?: shared.ResourceLink;
}
export declare class GetEpisodesIdResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    getEpisodesId200ApplicationVndApiPlusJsonObject?: GetEpisodesId200ApplicationVndApiPlusJson;
}
