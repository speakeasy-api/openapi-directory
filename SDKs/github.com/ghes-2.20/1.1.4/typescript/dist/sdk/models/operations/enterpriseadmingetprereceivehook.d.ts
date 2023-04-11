import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EnterpriseAdminGetPreReceiveHookRequest extends SpeakeasyBase {
    /**
     * pre_receive_hook_id parameter
     */
    preReceiveHookId: number;
}
export declare class EnterpriseAdminGetPreReceiveHookResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    preReceiveHook?: shared.PreReceiveHook;
}
