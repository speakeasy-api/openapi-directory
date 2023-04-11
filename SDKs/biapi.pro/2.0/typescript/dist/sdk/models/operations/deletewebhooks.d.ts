import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteWebhooksRequest extends SpeakeasyBase {
    expand?: string;
}
export declare class DeleteWebhooksResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful DELETE on Webhook resource
     */
    webhook?: shared.Webhook;
}
