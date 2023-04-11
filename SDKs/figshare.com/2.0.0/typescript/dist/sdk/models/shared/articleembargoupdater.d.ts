import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Embargo can be enabled at the article or the file level. Possible values: article, file
 */
export declare enum ArticleEmbargoUpdaterEmbargoTypeEnum {
    Article = "article",
    File = "file"
}
/**
 * Embargo description
 */
export declare class ArticleEmbargoUpdater extends SpeakeasyBase {
    /**
     * Date when the embargo expires and the article gets published, '0' value will set up permanent embargo
     */
    embargoDate: string;
    /**
     * List of embargo permissions to be associated with the article. The list must contain `id` and can also contain `group_ids`(a field that only applies to 'logged_in' permissions). The new list replaces old options in the database, and an empty list removes all permissions for this article. Administration permission has to be set up alone but logged in and IP range permissions can be set up together.
     */
    embargoOptions?: Record<string, any>[];
    /**
     * Reason for setting embargo
     */
    embargoReason?: string;
    /**
     * Title for embargo
     */
    embargoTitle?: string;
    /**
     * Embargo can be enabled at the article or the file level. Possible values: article, file
     */
    embargoType: ArticleEmbargoUpdaterEmbargoTypeEnum;
    /**
     * Embargo status
     */
    isEmbargoed: boolean;
}
