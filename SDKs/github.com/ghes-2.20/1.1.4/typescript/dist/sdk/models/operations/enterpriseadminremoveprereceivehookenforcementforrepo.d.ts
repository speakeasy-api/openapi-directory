import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EnterpriseAdminRemovePreReceiveHookEnforcementForRepoRequest extends SpeakeasyBase {
    owner: string;
    /**
     * pre_receive_hook_id parameter
     */
    preReceiveHookId: number;
    repo: string;
}
export declare class EnterpriseAdminRemovePreReceiveHookEnforcementForRepoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Responds with effective values inherited from owner and/or global level.
     */
    repositoryPreReceiveHook?: shared.RepositoryPreReceiveHook;
}
