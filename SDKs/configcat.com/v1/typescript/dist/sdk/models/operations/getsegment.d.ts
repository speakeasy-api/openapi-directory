import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSegmentRequest extends SpeakeasyBase {
    /**
     * The identifier of the Segment.
     */
    segmentId: string;
}
export declare class GetSegmentResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * When everything is ok, the config data returned.
     */
    segmentModel?: shared.SegmentModel;
    /**
     * When everything is ok, the config data returned.
     */
    segmentModelHaljson?: shared.SegmentModelHaljson;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
