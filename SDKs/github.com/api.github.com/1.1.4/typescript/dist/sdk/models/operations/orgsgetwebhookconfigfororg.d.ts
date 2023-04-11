import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class OrgsGetWebhookConfigForOrgRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the hook.
     */
    hookId: number;
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
}
export declare class OrgsGetWebhookConfigForOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    webhookConfig?: shared.WebhookConfig;
}
