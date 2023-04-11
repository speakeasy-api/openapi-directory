import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ScimListProvisionedIdentitiesRequest extends SpeakeasyBase {
    /**
     * Used for pagination: the number of results to return.
     */
    count?: number;
    /**
     * Filters results using the equals query parameter operator (`eq`). You can filter results that are equal to `id`, `userName`, `emails`, and `external_id`. For example, to search for an identity with the `userName` Octocat, you would use this query:
     *
     * @remarks
     *
     * `?filter=userName%20eq%20\"Octocat\"`.
     *
     * To filter results for the identity with the email `octocat@github.com`, you would use this query:
     *
     * `?filter=emails%20eq%20\"octocat@github.com\"`.
     */
    filter?: string;
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
    /**
     * Used for pagination: the index of the first result to return.
     */
    startIndex?: number;
}
export declare class ScimListProvisionedIdentitiesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    scimError?: shared.ScimError;
    /**
     * Response
     */
    scimUserList?: shared.ScimUserList;
}
