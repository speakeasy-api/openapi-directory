import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about a time zone. Includes the name of the time zone and the offset from UTC in seconds.
 */
export declare class TimeZone extends SpeakeasyBase {
    name: string;
    offset?: number;
}
