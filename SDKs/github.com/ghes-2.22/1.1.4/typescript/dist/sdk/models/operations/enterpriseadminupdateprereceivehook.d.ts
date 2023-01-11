import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EnterpriseAdminUpdatePreReceiveHookPathParams extends SpeakeasyBase {
    preReceiveHookId: number;
}
export declare class EnterpriseAdminUpdatePreReceiveHookRequestBody extends SpeakeasyBase {
    allowDownstreamConfiguration?: boolean;
    enforcement?: string;
    environment?: Record<string, any>;
    name?: string;
    script?: string;
    scriptRepository?: Record<string, any>;
}
export declare class EnterpriseAdminUpdatePreReceiveHookRequest extends SpeakeasyBase {
    pathParams: EnterpriseAdminUpdatePreReceiveHookPathParams;
    request?: EnterpriseAdminUpdatePreReceiveHookRequestBody;
}
export declare class EnterpriseAdminUpdatePreReceiveHookResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    preReceiveHook?: shared.PreReceiveHook;
}
