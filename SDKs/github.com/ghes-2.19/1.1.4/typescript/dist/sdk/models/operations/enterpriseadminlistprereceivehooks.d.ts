import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * One of `created` (when the repository was starred) or `updated` (when it was last pushed to) or `name`.
 */
export declare enum EnterpriseAdminListPreReceiveHooksSortEnum {
    Created = "created",
    Updated = "updated",
    Name = "name"
}
export declare class EnterpriseAdminListPreReceiveHooksRequest extends SpeakeasyBase {
    /**
     * One of `asc` (ascending) or `desc` (descending).
     */
    direction?: shared.DirectionEnum;
    /**
     * Page number of the results to fetch.
     */
    page?: number;
    /**
     * Results per page (max 100)
     */
    perPage?: number;
    /**
     * One of `created` (when the repository was starred) or `updated` (when it was last pushed to) or `name`.
     */
    sort?: EnterpriseAdminListPreReceiveHooksSortEnum;
}
export declare class EnterpriseAdminListPreReceiveHooksResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    preReceiveHooks?: shared.PreReceiveHook[];
}
