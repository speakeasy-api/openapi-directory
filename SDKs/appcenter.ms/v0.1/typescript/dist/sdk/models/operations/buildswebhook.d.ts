import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Bad Request
 */
export declare class BuildsWebhookDefaultApplicationJSON extends SpeakeasyBase {
    code: string;
    id: string;
    message: string;
}
export declare class BuildsWebhookResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad Request
     */
    buildsWebhookDefaultApplicationJSONObject?: BuildsWebhookDefaultApplicationJSON;
}
