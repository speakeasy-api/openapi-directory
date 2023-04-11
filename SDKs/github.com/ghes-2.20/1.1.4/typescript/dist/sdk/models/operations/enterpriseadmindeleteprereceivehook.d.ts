import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class EnterpriseAdminDeletePreReceiveHookRequest extends SpeakeasyBase {
    /**
     * pre_receive_hook_id parameter
     */
    preReceiveHookId: number;
}
export declare class EnterpriseAdminDeletePreReceiveHookResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
