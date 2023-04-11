import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateSegmentQueryFiltersConfigUsingPUTRequest extends SpeakeasyBase {
    /**
     * segmentQueryConfig
     */
    segmentQueryFilterConfigModel: shared.SegmentQueryFilterConfigModel;
    /**
     * apiKey
     */
    apiKey: string;
}
export declare class UpdateSegmentQueryFiltersConfigUsingPUTResponse extends SpeakeasyBase {
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
