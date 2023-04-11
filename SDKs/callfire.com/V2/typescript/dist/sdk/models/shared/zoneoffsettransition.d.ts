import { SpeakeasyBase } from "../../../internal/utils";
import { Duration } from "./duration";
import { ZoneOffset } from "./zoneoffset";
/**
 * ~
 */
export declare class ZoneOffsetTransition extends SpeakeasyBase {
    /**
     * ~
     */
    dateTimeAfter?: Date;
    /**
     * ~
     */
    dateTimeBefore?: Date;
    /**
     * ~
     */
    duration?: Duration;
    /**
     * ~
     */
    gap?: boolean;
    /**
     * ~
     */
    instant?: number;
    /**
     * ~
     */
    offsetAfter?: ZoneOffset;
    /**
     * ~
     */
    offsetBefore?: ZoneOffset;
    /**
     * ~
     */
    overlap?: boolean;
}
