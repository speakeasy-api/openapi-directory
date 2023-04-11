import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCampaignBatchSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class GetCampaignBatchRequest extends SpeakeasyBase {
    /**
     * Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.
     */
    fields?: string;
    /**
     * An id of a batch
     */
    id: number;
}
export declare class GetCampaignBatchResponse extends SpeakeasyBase {
    /**
     * successful operation
     */
    batch?: shared.Batch;
    contentType: string;
    /**
     * Bad request
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
