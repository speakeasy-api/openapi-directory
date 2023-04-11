import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * A boolean parameter. If true or 1, will return only federal holidays. If false or 0, will return no federal holidays.
 */
export declare enum HolidaysFederalEnum {
    One = "1",
    Zero = "0",
    True = "true",
    False = "false"
}
/**
 * A boolean parameter. If false or 0 (default), will return only legislated holidays. If true or 1, will return optional holidays from Alberta and BC.
 */
export declare enum HolidaysOptionalEnum {
    One = "1",
    Zero = "0",
    True = "true",
    False = "false"
}
export declare class HolidaysRequest extends SpeakeasyBase {
    /**
     * A boolean parameter. If true or 1, will return only federal holidays. If false or 0, will return no federal holidays.
     */
    federal?: HolidaysFederalEnum;
    /**
     * A boolean parameter. If false or 0 (default), will return only legislated holidays. If true or 1, will return optional holidays from Alberta and BC.
     */
    optional?: HolidaysOptionalEnum;
    /**
     * A calendar year
     */
    year?: number;
}
/**
 * OK
 */
export declare class Holidays200ApplicationJSON extends SpeakeasyBase {
    holidays?: shared.Holiday[];
}
export declare class HolidaysResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    holidays200ApplicationJSONObject?: Holidays200ApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
