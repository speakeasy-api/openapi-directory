import { SpeakeasyBase } from "../../../internal/utils";
import { CustomArticleFieldAdd } from "./customarticlefieldadd";
import { FundingCreate } from "./fundingcreate";
/**
 * Project description
 */
export declare class ProjectUpdate extends SpeakeasyBase {
    /**
     * List of key, values pairs to be associated with the project
     */
    customFields?: Record<string, any>;
    /**
     * List of custom fields values, supersedes custom_fields parameter
     */
    customFieldsList?: CustomArticleFieldAdd[];
    /**
     * Project description
     */
    description?: string;
    /**
     * Grant number or organization(s) that funded this project. Up to 2000 characters permitted.
     */
    funding?: string;
    /**
     * Funding creation / update items
     */
    fundingList?: FundingCreate[];
    /**
     * The title for this project - mandatory. 3 - 1000 characters.
     */
    title?: string;
}
