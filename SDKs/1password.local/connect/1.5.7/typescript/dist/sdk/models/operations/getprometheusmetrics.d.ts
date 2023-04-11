import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const GetPrometheusMetricsServerList: readonly ["http://localhost:8080"];
export declare class GetPrometheusMetricsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successfully returned Prometheus metrics
     */
    getPrometheusMetrics200TextPlainString?: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
