import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteSegmentRequest extends SpeakeasyBase {
    /**
     * The identifier of the Segment.
     */
    segmentId: string;
}
export declare class DeleteSegmentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
