import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetNamespaceTimespanMetadataRequest extends SpeakeasyBase {
    /**
     * Namespace to fetch data for
     */
    namespace: string;
    /**
     * Timespan to fetch data for
     */
    timespan: number;
    /**
     * Type of timespan to fetch data for
     */
    timespantype: shared.TimespanTypeEnum;
    /**
     * Year to fetch data for
     */
    year: number;
}
export declare class GetNamespaceTimespanMetadataResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    timespanModel?: any;
}
