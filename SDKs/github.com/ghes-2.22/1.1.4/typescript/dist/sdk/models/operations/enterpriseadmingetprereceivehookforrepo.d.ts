import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EnterpriseAdminGetPreReceiveHookForRepoRequest extends SpeakeasyBase {
    owner: string;
    /**
     * pre_receive_hook_id parameter
     */
    preReceiveHookId: number;
    repo: string;
}
export declare class EnterpriseAdminGetPreReceiveHookForRepoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    repositoryPreReceiveHook?: shared.RepositoryPreReceiveHook;
}
