import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EnterpriseAdminListPreReceiveHooksForRepoPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare class EnterpriseAdminListPreReceiveHooksForRepoQueryParams extends SpeakeasyBase {
    direction?: shared.DirectionEnum;
    page?: number;
    perPage?: number;
    sort?: shared.DirectionEnum2;
}
export declare class EnterpriseAdminListPreReceiveHooksForRepoRequest extends SpeakeasyBase {
    pathParams: EnterpriseAdminListPreReceiveHooksForRepoPathParams;
    queryParams: EnterpriseAdminListPreReceiveHooksForRepoQueryParams;
}
export declare class EnterpriseAdminListPreReceiveHooksForRepoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    repositoryPreReceiveHooks?: shared.RepositoryPreReceiveHook[];
}
