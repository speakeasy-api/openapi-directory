import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateSegmentRequest extends SpeakeasyBase {
    createSegmentModel: shared.CreateSegmentModel;
    /**
     * The identifier of the Product.
     */
    productId: string;
}
export declare class CreateSegmentResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * When the creation was successful.
     */
    segmentModel?: shared.SegmentModel;
    /**
     * When the creation was successful.
     */
    segmentModelHaljson?: shared.SegmentModelHaljson;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
