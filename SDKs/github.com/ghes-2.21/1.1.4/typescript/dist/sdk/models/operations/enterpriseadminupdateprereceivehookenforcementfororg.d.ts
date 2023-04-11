import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EnterpriseAdminUpdatePreReceiveHookEnforcementForOrgRequestBody extends SpeakeasyBase {
    /**
     * Whether repositories can override enforcement.
     */
    allowDownstreamConfiguration?: boolean;
    /**
     * The state of enforcement for the hook on this repository.
     */
    enforcement?: string;
}
export declare class EnterpriseAdminUpdatePreReceiveHookEnforcementForOrgRequest extends SpeakeasyBase {
    requestBody?: EnterpriseAdminUpdatePreReceiveHookEnforcementForOrgRequestBody;
    org: string;
    /**
     * pre_receive_hook_id parameter
     */
    preReceiveHookId: number;
}
export declare class EnterpriseAdminUpdatePreReceiveHookEnforcementForOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    orgPreReceiveHook?: shared.OrgPreReceiveHook;
}
