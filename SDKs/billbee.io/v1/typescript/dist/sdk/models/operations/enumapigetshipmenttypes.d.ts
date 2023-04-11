import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class EnumApiGetShipmentTypesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    enumApiGetShipmentTypes200ApplicationJSONObject?: Record<string, any>;
    /**
     * OK
     */
    enumApiGetShipmentTypes200TextJSONObject?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
