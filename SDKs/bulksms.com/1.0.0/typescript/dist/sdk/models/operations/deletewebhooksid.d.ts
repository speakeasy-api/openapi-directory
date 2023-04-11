import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteWebhooksIdRequest extends SpeakeasyBase {
    /**
     * The `id` of the webhook
     */
    id: string;
}
export declare class DeleteWebhooksIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A webhook with the given id does not exit
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
