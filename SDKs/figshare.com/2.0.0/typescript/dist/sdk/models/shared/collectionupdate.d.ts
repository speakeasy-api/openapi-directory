import { SpeakeasyBase } from "../../../internal/utils";
import { CustomArticleFieldAdd } from "./customarticlefieldadd";
import { FundingCreate } from "./fundingcreate";
import { TimelineUpdate } from "./timelineupdate";
/**
 * Collection description
 */
export declare class CollectionUpdate extends SpeakeasyBase {
    /**
     * List of articles to be associated with the collection
     */
    articles?: number[];
    /**
     * List of authors to be associated with the collection. The list can contain the following fields: id, name, first_name, last_name, email, orcid_id. If an id is supplied, it will take priority and everything else will be ignored. No more than 10 authors. For adding more authors use the specific authors endpoint.
     */
    authors?: Record<string, any>[];
    /**
     * List of category ids to be associated with the collection (e.g [1, 23, 33, 66])
     */
    categories?: number[];
    /**
     * List of category source ids to be associated with the article, supersedes the categories property
     */
    categoriesBySourceId?: string[];
    /**
     * List of key, values pairs to be associated with the collection
     */
    customFields?: Record<string, any>;
    /**
     * List of custom fields values, supersedes custom_fields parameter
     */
    customFieldsList?: CustomArticleFieldAdd[];
    /**
     * The collection description. In a publisher case, usually this is the remote collection description
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
     * Not applicable to regular users. This field is reserved to institutions/publishers with access to assign to specific groups
     */
    groupId?: number;
    /**
     * Not applicable for regular users. In an institutional case, make sure your group supports setting Handles. This setting is applied by figshare via opening a ticket through our support/helpdesk system.
     */
    handle?: string;
    /**
     * List of tags to be associated with the collection. Tags can be used instead
     */
    keywords?: string[];
    /**
     * List of links to be associated with the collection (e.g ["http://link1", "http://link2", "http://link3"])
     */
    references?: string[];
    /**
     * Not applicable to regular users. In a publisher case, this is the publisher article DOI.
     */
    resourceDoi?: string;
    /**
     * Not applicable to regular users. In a publisher case, this is the publisher article id
     */
    resourceId?: string;
    /**
     * Not applicable to regular users. In a publisher case, this is the publisher article link
     */
    resourceLink?: string;
    /**
     * Not applicable to regular users. In a publisher case, this is the publisher article title.
     */
    resourceTitle?: string;
    /**
     * Not applicable to regular users. In a publisher case, this is the publisher article version
     */
    resourceVersion?: number;
    /**
     * List of tags to be associated with the collection. Keywords can be used instead
     */
    tags?: string[];
    timeline?: TimelineUpdate;
    /**
     * Title of collection
     */
    title?: string;
}
