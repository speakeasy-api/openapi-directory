import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * A boolean parameter. If false or 0 (default), will return provinces for which this is a legislated holiday. If true or 1, will return provinces which optionally celebrate this holiday.
 */
export declare enum HolidayOptionalEnum {
    One = "1",
    Zero = "0",
    True = "true",
    False = "false"
}
export declare class HolidayRequest extends SpeakeasyBase {
    /**
     * Primary key for a holiday
     */
    holidayId: number;
    /**
     * A boolean parameter. If false or 0 (default), will return provinces for which this is a legislated holiday. If true or 1, will return provinces which optionally celebrate this holiday.
     */
    optional?: HolidayOptionalEnum;
    /**
     * A calendar year
     */
    year?: number;
}
/**
 * Bad Request
 */
export declare class Holiday400ApplicationJSON extends SpeakeasyBase {
    error?: shared.ErrorT;
}
/**
 * OK
 */
export declare class Holiday200ApplicationJSON extends SpeakeasyBase {
    /**
     * A Canadian holiday. Includes a name, the literal date of the holiday, the observed date of the holiday (ie, accommodating for weekends), and a list of regions that observe this holiday.
     */
    holiday?: shared.Holiday;
}
export declare class HolidayResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    holiday200ApplicationJSONObject?: Holiday200ApplicationJSON;
    /**
     * Bad Request
     */
    holiday400ApplicationJSONObject?: Holiday400ApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
