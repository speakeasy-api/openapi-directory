import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdatereservationRequestBody extends SpeakeasyBase {
    connector?: number;
    driver?: string;
    endDate?: string;
    evse?: number;
}
export declare class UpdatereservationRequest extends SpeakeasyBase {
    requestBody: UpdatereservationRequestBody;
    /**
     * ID of the reservation that needs to be fetched
     */
    id: string;
}
/**
 * A successful response
 */
export declare class Updatereservation201ApplicationJSON extends SpeakeasyBase {
    message?: string;
    ok?: boolean;
    result?: Record<string, any>;
}
export declare class UpdatereservationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A successful response
     */
    updatereservation201ApplicationJSONObject?: Updatereservation201ApplicationJSON;
}
