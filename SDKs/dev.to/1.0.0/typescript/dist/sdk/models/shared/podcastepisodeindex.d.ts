import { SpeakeasyBase } from "../../../internal/utils";
import { SharedPodcast } from "./sharedpodcast";
/**
 * Representation of a podcast episode returned in a list
 */
export declare class PodcastEpisodeIndex extends SpeakeasyBase {
    className: string;
    id: number;
    /**
     * Podcast episode image url or podcast image url
     */
    imageUrl: string;
    path: string;
    /**
     * The podcast that the resource belongs to
     */
    podcast: SharedPodcast;
    title: string;
    typeOf: string;
}
