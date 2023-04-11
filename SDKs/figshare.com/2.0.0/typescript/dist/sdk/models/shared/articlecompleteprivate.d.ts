import { SpeakeasyBase } from "../../../internal/utils";
import { Author } from "./author";
import { Category } from "./category";
import { CustomArticleField } from "./customarticlefield";
import { GroupEmbargoOptions } from "./groupembargooptions";
import { License } from "./license";
import { PublicFile } from "./publicfile";
import { Timeline } from "./timeline";
/**
 * OK. Article representation
 */
export declare class ArticleCompletePrivate extends SpeakeasyBase {
    /**
     * ID of the account owning the article
     */
    accountId: number;
    /**
     * List of article authors
     */
    authors: Author[];
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
     * List of custom fields values
     */
    customFields: CustomArticleField[];
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
     * List of embargo options
     */
    embargoOptions: GroupEmbargoOptions[];
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
     * Article public url
     */
    figshareUrl: string;
    /**
     * List of article files
     */
    files: PublicFile[];
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
     * Group resource id
     */
    groupResourceId: string;
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
     * Article DOI
     */
    resourceDoi: string;
    /**
     * Article resource title
     */
    resourceTitle: string;
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
