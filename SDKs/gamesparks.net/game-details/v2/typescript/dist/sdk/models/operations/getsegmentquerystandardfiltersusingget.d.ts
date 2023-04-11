import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GETSegmentQueryStandardFiltersUsingGETRequest extends SpeakeasyBase {
    /**
     * apiKey
     */
    apiKey: string;
}
export declare class GETSegmentQueryStandardFiltersUsingGETResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * json error
     */
    messageModel?: shared.MessageModel;
    /**
     * OK
     */
    segmentQueryFilterListModel?: shared.SegmentQueryFilterListModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
