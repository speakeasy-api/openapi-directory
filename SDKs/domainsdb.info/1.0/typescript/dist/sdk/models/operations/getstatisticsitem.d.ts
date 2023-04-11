import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetStatisticsItemRequest extends SpeakeasyBase {
    /**
     * Results per page
     */
    limit?: number;
    /**
     * Search page to request
     */
    page?: string;
    zone: string;
}
export declare class GetStatisticsItemResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    zoneStats?: shared.ZoneStats;
}
