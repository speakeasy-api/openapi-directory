import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GETSegmentQueryFiltersConfigUsingGETRequest extends SpeakeasyBase {
    /**
     * apiKey
     */
    apiKey: string;
}
export declare class GETSegmentQueryFiltersConfigUsingGETResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * json error
     */
    messageModel?: shared.MessageModel;
    /**
     * OK
     */
    segmentQueryFilterConfigModel?: shared.SegmentQueryFilterConfigModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
