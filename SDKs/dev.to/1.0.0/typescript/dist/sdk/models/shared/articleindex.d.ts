import { SpeakeasyBase } from "../../../internal/utils";
import { ArticleFlareTag } from "./articleflaretag";
import { SharedOrganization } from "./sharedorganization";
import { SharedUser } from "./shareduser";
/**
 * Representation of an article or post returned in a list
 */
export declare class ArticleIndex extends SpeakeasyBase {
    canonicalUrl: string;
    coverImage: string;
    createdAt: Date;
    crosspostedAt: Date;
    description: string;
    editedAt: Date;
    /**
     * Flare tag of the article
     */
    flareTag?: ArticleFlareTag;
    id: number;
    lastCommentAt: Date;
    /**
     * The organization the resource belongs to
     */
    organization?: SharedOrganization;
    path: string;
    positiveReactionsCount: number;
    publicReactionsCount: number;
    publishedAt: Date;
    /**
     * Crossposting or published date time
     */
    publishedTimestamp: Date;
    readablePublishDate: string;
    /**
     * Reading time, in minutes
     */
    readingTimeMinutes: number;
    slug: string;
    socialImage: string;
    tagList: string[];
    tags: string;
    title: string;
    typeOf: string;
    url: string;
    /**
     * The resource creator
     */
    user: SharedUser;
}
