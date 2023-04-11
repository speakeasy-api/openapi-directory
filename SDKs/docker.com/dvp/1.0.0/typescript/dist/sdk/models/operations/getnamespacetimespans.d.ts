import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetNamespaceTimespansRequest extends SpeakeasyBase {
    /**
     * Namespace to fetch data for
     */
    namespace: string;
    /**
     * Type of timespan to fetch data for
     */
    timespantype: shared.TimespanTypeEnum;
    /**
     * Year to fetch data for
     */
    year: number;
}
export declare class GetNamespaceTimespansResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    timespanData?: any;
}
