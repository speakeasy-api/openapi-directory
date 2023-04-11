import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetEpisodesIdNextSiblingSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class GetEpisodesIdNextSiblingRequest extends SpeakeasyBase {
    /**
     * The ID of the episode to find the one episode released right after it.
     */
    id: string;
    /**
     * If `true`, get the next released and published episode with an available media file.
     *
     * @remarks
     *
     */
    rss?: boolean;
}
/**
 * Success
 */
export declare class GetEpisodesIdNextSibling200ApplicationVndApiPlusJson extends SpeakeasyBase {
    data?: shared.Episode;
    /**
     * Links related to the retrieved resource
     */
    links?: shared.ResourceLink;
}
export declare class GetEpisodesIdNextSiblingResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    getEpisodesIdNextSibling200ApplicationVndApiPlusJsonObject?: GetEpisodesIdNextSibling200ApplicationVndApiPlusJson;
}
