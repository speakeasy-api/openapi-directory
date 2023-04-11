import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class OrgsDeleteWebhookRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the hook.
     */
    hookId: number;
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
}
export declare class OrgsDeleteWebhookResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Resource not found
     */
    basicError?: shared.BasicError;
}
