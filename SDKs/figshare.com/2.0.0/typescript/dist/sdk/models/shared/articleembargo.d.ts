import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OK. Embargo for article
 */
export declare class ArticleEmbargo extends SpeakeasyBase {
    /**
     * Date when embargo lifts
     */
    embargoDate: string;
    /**
     * List of embargo permissions that are associated with the article. If the type is logged_in and the group_ids list is empty, then the whole institution can see the article; if there are multiple group_ids, then only users that are under those groups can see the article.
     */
    embargoOptions: Record<string, any>[];
    /**
     * Reason for embargo
     */
    embargoReason: string;
    /**
     * Title for embargo
     */
    embargoTitle: string;
    /**
     * Embargo type
     */
    embargoType: string;
    /**
     * True if embargoed
     */
    isEmbargoed: boolean;
}
