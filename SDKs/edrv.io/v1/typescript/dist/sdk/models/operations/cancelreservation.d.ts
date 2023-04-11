import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CancelreservationRequestBody extends SpeakeasyBase {
    reservation?: string;
}
/**
 * A successful response
 */
export declare class Cancelreservation201ApplicationJSON extends SpeakeasyBase {
    message?: string;
    ok?: boolean;
    result?: Record<string, any>;
}
export declare class CancelreservationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A successful response
     */
    cancelreservation201ApplicationJSONObject?: Cancelreservation201ApplicationJSON;
}
