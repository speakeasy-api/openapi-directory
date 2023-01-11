import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EnterpriseAdminCreatePreReceiveHookRequestBody extends SpeakeasyBase {
    allowDownstreamConfiguration?: boolean;
    enforcement?: string;
    environment: Record<string, any>;
    name: string;
    script: string;
    scriptRepository: Record<string, any>;
}
export declare class EnterpriseAdminCreatePreReceiveHookRequest extends SpeakeasyBase {
    request?: EnterpriseAdminCreatePreReceiveHookRequestBody;
}
export declare class EnterpriseAdminCreatePreReceiveHookResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    preReceiveHook?: shared.PreReceiveHook;
}
