import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetUpcomingScheduledCampaignsAndCanvasesRequest extends SpeakeasyBase {
    /**
     * (Required) String in ISO 8601 format
     *
     * @remarks
     *
     * End date of the range to retrieve upcoming scheduled Campaigns and Canvases. This is treated as midnight in UTC time by the API.
     */
    endTime?: string;
}
export declare class GetUpcomingScheduledCampaignsAndCanvasesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
