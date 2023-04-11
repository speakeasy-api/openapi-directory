import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateSegmentRequest extends SpeakeasyBase {
    updateSegmentModel: shared.UpdateSegmentModel;
    /**
     * The identifier of the Segment.
     */
    segmentId: string;
}
export declare class UpdateSegmentResponse extends SpeakeasyBase {
    contentType: string;
    segmentModel?: shared.SegmentModel;
    segmentModelHaljson?: shared.SegmentModelHaljson;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
