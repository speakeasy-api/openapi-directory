import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum EnterpriseAdminListPreReceiveHooksForRepoSortEnum {
    Created = "created",
    Updated = "updated",
    Name = "name"
}
export declare class EnterpriseAdminListPreReceiveHooksForRepoRequest extends SpeakeasyBase {
    /**
     * One of `asc` (ascending) or `desc` (descending).
     */
    direction?: shared.DirectionEnum;
    owner: string;
    /**
     * Page number of the results to fetch.
     */
    page?: number;
    /**
     * Results per page (max 100)
     */
    perPage?: number;
    repo: string;
    sort?: EnterpriseAdminListPreReceiveHooksForRepoSortEnum;
}
export declare class EnterpriseAdminListPreReceiveHooksForRepoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    repositoryPreReceiveHooks?: shared.RepositoryPreReceiveHook[];
}
