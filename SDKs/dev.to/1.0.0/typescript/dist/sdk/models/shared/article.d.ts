import { SpeakeasyBase } from "../../../internal/utils";
export declare class ArticleArticle extends SpeakeasyBase {
    bodyMarkdown?: string;
    canonicalUrl?: string;
    description?: string;
    mainImage?: string;
    organizationId?: number;
    published?: boolean;
    series?: string;
    tags?: string;
    title?: string;
}
/**
 * Representation of an Article to be created/updated
 */
export declare class Article extends SpeakeasyBase {
    article?: ArticleArticle;
}
