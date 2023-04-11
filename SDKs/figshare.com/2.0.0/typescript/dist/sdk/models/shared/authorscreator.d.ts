import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Authors description
 */
export declare class AuthorsCreator extends SpeakeasyBase {
    /**
     * List of authors to be associated with the article. The list can contain the following fields: id, name, first_name, last_name, email, orcid_id. If an id is supplied, it will take priority and everything else will be ignored. No more than 10 authors. For adding more authors use the specific authors endpoint.
     */
    authors: Record<string, any>[];
}
