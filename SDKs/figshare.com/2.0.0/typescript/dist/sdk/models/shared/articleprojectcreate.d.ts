import { SpeakeasyBase } from "../../../internal/utils";
import { CustomArticleFieldAdd } from "./customarticlefieldadd";
import { FundingCreate } from "./fundingcreate";
import { TimelineUpdate } from "./timelineupdate";
/**
 * Article description
 */
export declare class ArticleProjectCreate extends SpeakeasyBase {
    /**
     * List of authors to be associated with the article. The list can contain the following fields: id, name, first_name, last_name, email, orcid_id. If an id is supplied, it will take priority and everything else will be ignored. No more than 10 authors. For adding more authors use the specific authors endpoint.
     */
    authors?: Record<string, any>[];
    /**
     * List of category ids to be associated with the article(e.g [1, 23, 33, 66])
     */
    categories?: number[];
    /**
     * List of category source ids to be associated with the article, supersedes the categories property
     */
    categoriesBySourceId?: string[];
    /**
     * List of key, values pairs to be associated with the article
     */
    customFields?: Record<string, any>;
    /**
     * List of custom fields values, supersedes custom_fields parameter
     */
    customFieldsList?: CustomArticleFieldAdd[];
    /**
     * <b>One of:</b> <code>figure</code> <code>online resource</code> <code>preprint</code> <code>book</code> <code>conference contribution</code> <code>media</code> <code>dataset</code> <code>poster</code> <code>journal contribution</code> <code>presentation</code> <code>thesis</code> <code>software</code>
     */
    definedType?: string;
    /**
     * The article description. In a publisher case, usually this is the remote article description
     */
    description?: string;
    /**
     * Not applicable for regular users. In an institutional case, make sure your group supports setting DOIs. This setting is applied by figshare via opening a ticket through our support/helpdesk system.
     */
    doi?: string;
    /**
     * Grant number or funding authority
     */
    funding?: string;
    /**
     * Funding creation / update items
     */
    fundingList?: FundingCreate[];
    /**
     * Not applicable for regular users. In an institutional case, make sure your group supports setting Handles. This setting is applied by figshare via opening a ticket through our support/helpdesk system.
     */
    handle?: string;
    /**
     * List of tags to be associated with the article. Tags can be used instead
     */
    keywords?: string[];
    /**
     * License id for this article.
     */
    license?: number;
    /**
     * List of links to be associated with the article (e.g ["http://link1", "http://link2", "http://link3"])
     */
    references?: string[];
    /**
     * Not applicable to regular users. In a publisher case, this is the publisher article DOI.
     */
    resourceDoi?: string;
    /**
     * Not applicable to regular users. In a publisher case, this is the publisher article title.
     */
    resourceTitle?: string;
    /**
     * List of tags to be associated with the article. Keywords can be used instead
     */
    tags?: string[];
    timeline?: TimelineUpdate;
    /**
     * Title of article
     */
    title: string;
}
