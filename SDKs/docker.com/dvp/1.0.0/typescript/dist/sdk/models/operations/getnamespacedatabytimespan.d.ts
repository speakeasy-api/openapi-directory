import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetNamespaceDataByTimespanRequest extends SpeakeasyBase {
    /**
     * Type of data to fetch
     */
    dataview: shared.DataviewTypeEnum;
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
export declare class GetNamespaceDataByTimespanResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    responseData?: shared.ResponseData;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
