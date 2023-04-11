import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetMonitoringRequest extends SpeakeasyBase {
    /**
     * number on days on which stats on synchronization have to be done per worker (Default: 1)
     */
    period?: number;
}
export declare class GetMonitoringResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
