import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreateWebhookRequestBodyWebhook extends SpeakeasyBase {
    collection?: string;
    name?: string;
}
export declare class CreateWebhookRequestBody extends SpeakeasyBase {
    webhook?: CreateWebhookRequestBodyWebhook;
}
export declare class CreateWebhookRequest extends SpeakeasyBase {
    requestBody?: CreateWebhookRequestBody;
    workspace?: string;
}
export declare class CreateWebhookResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
