import { SpeakeasyBase } from "../../../internal/utils";
import { Timeline } from "./timeline";
export declare class ArticleWithProject extends SpeakeasyBase {
    /**
     * Type of article identifier
     */
    definedType: number;
    /**
     * Name of the article type identifier
     */
    definedTypeName: string;
    /**
     * DOI
     */
    doi: string;
    /**
     * Group ID
     */
    groupId: number;
    /**
     * Handle
     */
    handle: string;
    /**
     * Unique identifier for article
     */
    id: number;
    /**
     * Project id for this article.
     */
    projectId: number;
    /**
     * Posted date
     */
    publishedDate: string;
    /**
     * Thumbnail image
     */
    thumb: string;
    timeline: Timeline;
    /**
     * Title of article
     */
    title: string;
    /**
     * Api endpoint for article
     */
    url: string;
    /**
     * Private Api endpoint for article
     */
    urlPrivateApi: string;
    /**
     * Private site endpoint for article
     */
    urlPrivateHtml: string;
    /**
     * Public Api endpoint for article
     */
    urlPublicApi: string;
    /**
     * Public site endpoint for article
     */
    urlPublicHtml: string;
}
