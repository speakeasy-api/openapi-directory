import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetItvItemsummaryExternalIdRequest extends SpeakeasyBase {
    /**
     * The external identifier of the item.
     */
    externalId: string;
}
export declare class GetItvItemsummaryExternalIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request.
     */
    serviceError?: shared.ServiceError;
    /**
     * Item found.
     */
    getItvItemsummaryExternalId302ApplicationJSONObject?: Record<string, any>;
}
