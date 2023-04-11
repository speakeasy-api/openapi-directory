import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetPodcastEpisodesRequest extends SpeakeasyBase {
    /**
     * Pagination page
     */
    page?: number;
    /**
     * Page size (the number of items to return per page). The default maximum value can be overridden by "API_PER_PAGE_MAX" environment variable.
     */
    perPage?: number;
    /**
     * Using this parameter will retrieve episodes belonging to a specific podcast.
     */
    username?: string;
}
export declare class GetPodcastEpisodesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A List of Podcast episodes filtered by username
     */
    podcastEpisodeIndices?: shared.PodcastEpisodeIndex[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
