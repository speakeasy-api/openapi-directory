import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetEpisodesIdPreviousSiblingSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class GetEpisodesIdPreviousSiblingRequest extends SpeakeasyBase {
    /**
     * The ID of the episode to find the one episode released right before it.
     */
    id: string;
    /**
     * If `true`, get the previously released and published episode with an available media file.
     *
     * @remarks
     *
     */
    rss?: boolean;
}
/**
 * Success
 */
export declare class GetEpisodesIdPreviousSibling200ApplicationVndApiPlusJson extends SpeakeasyBase {
    data?: shared.Episode;
    /**
     * Links related to the retrieved resource
     */
    links?: shared.ResourceLink;
}
export declare class GetEpisodesIdPreviousSiblingResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    getEpisodesIdPreviousSibling200ApplicationVndApiPlusJsonObject?: GetEpisodesIdPreviousSibling200ApplicationVndApiPlusJson;
}
