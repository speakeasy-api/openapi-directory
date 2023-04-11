import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FindCampaignSoundsSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FindCampaignSoundsRequest extends SpeakeasyBase {
    /**
     * Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.
     */
    fields?: string;
    /**
     * value to filter file names again; this value is used to check if the filename contains the filter value.
     */
    filter?: string;
    /**
     * Includes ARCHIVED sounds for "true" value
     */
    includeArchived?: boolean;
    /**
     * Includes UPLOAD/RECORDING sounds for "true" value
     */
    includePending?: boolean;
    /**
     * Includes SCRUBBED sounds for "true" value
     */
    includeScrubbed?: boolean;
    /**
     * To set the maximum number of records to return in a paged list response. The default is 100
     */
    limit?: number;
    /**
     * Offset to the start of a given page. The default is 0. Check [pagination](https://developers.callfire.com/docs.html#pagination) page for more information about pagination in CallFire API.
     */
    offset?: number;
}
export declare class FindCampaignSoundsResponse extends SpeakeasyBase {
    /**
     * successful operation
     */
    campaignSoundPage?: shared.CampaignSoundPage;
    contentType: string;
    /**
     * Bad request
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
