import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSegmentsRequest extends SpeakeasyBase {
    /**
     * The identifier of the Product.
     */
    productId: string;
}
export declare class GetSegmentsResponse extends SpeakeasyBase {
    contentType: string;
    segmentListModelHaljsons?: shared.SegmentListModelHaljson[];
    segmentListModels?: shared.SegmentListModel[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
