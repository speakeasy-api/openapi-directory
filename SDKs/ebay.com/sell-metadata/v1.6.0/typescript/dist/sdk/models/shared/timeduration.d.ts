import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A complex type that specifies a period of time using a specified time-measurement unit.
 */
export declare class TimeDuration extends SpeakeasyBase {
    /**
     * A time-measurement unit that specifies a singular period of time.  <br><br>A span of time is defined when you apply the value specified in the <b>value</b> field to the value specified for <b>unit</b>.  <br><br>Time-measurement units can be YEAR, MONTH, DAY, and so on. See <b>TimeDurationUnitEnum</b> for a complete list of possible time-measurement units. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/metadata/types/ba:TimeDurationUnitEnum'>eBay API documentation</a>
     */
    unit?: string;
    /**
     * An integer that represents an amount of time, as measured by the time-measurement unit specified in the <b>unit</b> field.
     */
    value?: number;
}
