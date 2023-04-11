import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
 */
export declare enum ResetTenantWebhookLifetimeXSdsDateFormatEnum {
    Utc = "UTC",
    Local = "LOCAL",
    Offset = "OFFSET",
    Epoch = "EPOCH",
    Leet = "LEET"
}
export declare class ResetTenantWebhookLifetimeRequest extends SpeakeasyBase {
    /**
     * Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
     */
    xSdsDateFormat?: ResetTenantWebhookLifetimeXSdsDateFormatEnum;
    /**
     * Service Authentication token
     */
    xSdsServiceToken?: string;
    /**
     * Webhook ID
     */
    webhookId: number;
}
export declare class ResetTenantWebhookLifetimeResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    webhook?: shared.Webhook;
}
