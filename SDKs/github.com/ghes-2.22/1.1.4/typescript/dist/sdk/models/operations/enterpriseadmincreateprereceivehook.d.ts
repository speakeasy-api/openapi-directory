import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EnterpriseAdminCreatePreReceiveHookRequestBody extends SpeakeasyBase {
    /**
     * Whether enforcement can be overridden at the org or repo level. default: `false`
     */
    allowDownstreamConfiguration?: boolean;
    /**
     * The state of enforcement for this hook. default: `disabled`
     */
    enforcement?: string;
    /**
     * The pre-receive environment where the script is executed.
     */
    environment: Record<string, any>;
    /**
     * The name of the hook.
     */
    name: string;
    /**
     * The script that the hook runs.
     */
    script: string;
    /**
     * The GitHub repository where the script is kept.
     */
    scriptRepository: Record<string, any>;
}
export declare class EnterpriseAdminCreatePreReceiveHookResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    preReceiveHook?: shared.PreReceiveHook;
}
