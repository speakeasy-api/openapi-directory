import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SegmentDetailsRequest extends SpeakeasyBase {
    /**
     * (Required) String
     *
     * @remarks
     *
     * Segment API identifier
     */
    segmentId?: string;
}
export declare class SegmentDetailsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
