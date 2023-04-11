import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EnterpriseAdminRemovePreReceiveHookEnforcementForOrgRequest extends SpeakeasyBase {
    org: string;
    /**
     * pre_receive_hook_id parameter
     */
    preReceiveHookId: number;
}
export declare class EnterpriseAdminRemovePreReceiveHookEnforcementForOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    orgPreReceiveHook?: shared.OrgPreReceiveHook;
}
