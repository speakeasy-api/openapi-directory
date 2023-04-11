import { SpeakeasyBase } from "../../../internal/utils";
import { Timeline } from "./timeline";
export declare class Collection extends SpeakeasyBase {
    /**
     * Collection DOI
     */
    doi: string;
    /**
     * Collection Handle
     */
    handle: string;
    /**
     * Collection id
     */
    id: number;
    /**
     * Date when collection was published
     */
    publishedDate: string;
    timeline: Timeline;
    /**
     * Collection title
     */
    title: string;
    /**
     * Api endpoint
     */
    url: string;
}
