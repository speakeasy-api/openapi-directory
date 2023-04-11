import { SpeakeasyBase } from "../../../internal/utils";
import { Author } from "./author";
import { Category } from "./category";
import { CustomArticleField } from "./customarticlefield";
import { FundingInformation } from "./fundinginformation";
import { Timeline } from "./timeline";
/**
 * OK. Collection representation
 */
export declare class CollectionComplete extends SpeakeasyBase {
    /**
     * Number of articles in collection
     */
    articlesCount: number;
    /**
     * List of collection authors
     */
    authors: Author[];
    /**
     * List of collection categories
     */
    categories: Category[];
    /**
     * Collection citation
     */
    citation: string;
    /**
     * Date when collection was created
     */
    createdDate: string;
    /**
     * Collection custom fields
     */
    customFields: CustomArticleField[];
    /**
     * Collection description
     */
    description: string;
    /**
     * Collection DOI
     */
    doi: string;
    /**
     * Full Collection funding information
     */
    funding: FundingInformation[];
    /**
     * Collection group
     */
    groupId: number;
    /**
     * Collection group resource id
     */
    groupResourceId: string;
    /**
     * Collection Handle
     */
    handle: string;
    /**
     * Collection id
     */
    id: number;
    /**
     * Collection institution
     */
    institutionId: number;
    /**
     * Date when collection was last modified
     */
    modifiedDate: string;
    /**
     * True if collection is published
     */
    public: boolean;
    /**
     * Date when collection was published
     */
    publishedDate: string;
    /**
     * List of collection references
     */
    references: string[];
    /**
     * Collection resource doi
     */
    resourceDoi: string;
    /**
     * Collection resource id
     */
    resourceId: string;
    /**
     * Collection resource link
     */
    resourceLink: string;
    /**
     * Collection resource title
     */
    resourceTitle: string;
    /**
     * Collection resource version
     */
    resourceVersion: number;
    /**
     * List of collection tags
     */
    tags: string[];
    timeline: Timeline;
    /**
     * Collection title
     */
    title: string;
    /**
     * Api endpoint
     */
    url: string;
    /**
     * Collection version
     */
    version: number;
}
