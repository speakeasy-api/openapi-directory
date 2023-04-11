import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class OptOutOfProgramSecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class OptOutOfProgramResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    optOutOfProgram200ApplicationJSONObject?: Record<string, any>;
}
