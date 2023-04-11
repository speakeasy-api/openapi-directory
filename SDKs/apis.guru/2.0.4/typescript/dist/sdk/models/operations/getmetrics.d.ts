import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetMetricsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    metrics?: shared.Metrics;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
