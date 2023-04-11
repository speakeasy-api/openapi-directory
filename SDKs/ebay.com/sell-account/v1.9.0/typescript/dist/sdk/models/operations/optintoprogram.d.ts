import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class OptInToProgramSecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class OptInToProgramResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    optInToProgram200ApplicationJSONObject?: Record<string, any>;
}
