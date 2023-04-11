import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetPredictedPointsRequest extends SpeakeasyBase {
    /**
     * Distance filter
     */
    distance: number;
    /**
     * Down filter
     */
    down: number;
}
export declare class GetPredictedPointsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * successful operation
     */
    predictedPoints?: shared.PredictedPoints[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
