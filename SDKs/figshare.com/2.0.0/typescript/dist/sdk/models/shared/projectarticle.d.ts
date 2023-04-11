import { SpeakeasyBase } from "../../../internal/utils";
import { Category } from "./category";
import { License } from "./license";
import { Timeline } from "./timeline";
/**
 * OK. Article representation
 */
export declare class ProjectArticle extends SpeakeasyBase {
    /**
     * List of categories selected for the article
     */
    categories: Category[];
    /**
     * Article citation
     */
    citation: string;
    /**
     * Confidentiality reason
     */
    confidentialReason: string;
    /**
     * Date when article was created
     */
    createdDate: string;
    /**
     * Type of article identifier
     */
    definedType: number;
    /**
     * Name of the article type identifier
     */
    definedTypeName: string;
    /**
     * Article description
     */
    description: string;
    /**
     * DOI
     */
    doi: string;
    /**
     * Date when embargo lifts
     */
    embargoDate: string;
    /**
     * Reason for embargo
     */
    embargoReason: string;
    /**
     * Title for embargo
     */
    embargoTitle: string;
    /**
     * Article embargo
     */
    embargoType: string;
    /**
     * Article funding
     */
    funding: string;
    fundingList: number[];
    /**
     * Group ID
     */
    groupId: number;
    /**
     * Handle
     */
    handle: string;
    /**
     * True if any files are linked to the article
     */
    hasLinkedFile: boolean;
    /**
     * Unique identifier for article
     */
    id: number;
    /**
     * True if article is active
     */
    isActive: boolean;
    /**
     * Article Confidentiality
     */
    isConfidential: boolean;
    /**
     * True if article is embargoed
     */
    isEmbargoed: boolean;
    /**
     * True if article has no files
     */
    isMetadataRecord: boolean;
    /**
     * True if article is published
     */
    isPublic: boolean;
    license: License;
    /**
     * Article metadata reason
     */
    metadataReason: string;
    /**
     * Date when article was last modified
     */
    modifiedDate: string;
    /**
     * Posted date
     */
    publishedDate: string;
    /**
     * List of references
     */
    references: string[];
    /**
     * Article size
     */
    size: number;
    /**
     * Article status
     */
    status: string;
    /**
     * List of article tags
     */
    tags: string[];
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
    /**
     * Article version
     */
    version: number;
}
