import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetEventsSecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class GetEventsRequest extends SpeakeasyBase {
    /**
     * A header used to specify the eBay marketplace ID.
     */
    xEbayCMarketplaceId: string;
    /**
     * The maximum number of items, from the current result set, returned on a single page. Default: 20 Maximum Value: 100
     */
    limit?: string;
    /**
     * The number of items that will be skipped in the result set. This is used with the limit field to control the pagination of the output. For example, if the offset is set to 0 and the limit is set to 10, the method will retrieve items 1 through 10 from the list of items returned. If the offset is set to 10 and the limit is set to 10, the method will retrieve items 11 through 20 from the list of items returned. Default: 0
     */
    offset?: string;
}
export declare class GetEventsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    eventSearchResponse?: shared.EventSearchResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
