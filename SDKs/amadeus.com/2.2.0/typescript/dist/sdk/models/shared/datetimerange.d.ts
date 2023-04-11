import { SpeakeasyBase } from "../../../internal/utils";
export declare class DateTimeRange extends SpeakeasyBase {
    /**
     * Dates are specified in the [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) YYYY-MM-DD format, e.g. 2018-12-25
     */
    date: Date;
    /**
     * Either 1, 2 or 3 extra days around the local date (IxD for +/- x days - Ex: I3D), Either 1 to 3 days after the local date (PxD for +x days - Ex: P3D), or 1 to 3 days before the local date (MxD for -x days - Ex: M3D)
     *
     * @remarks
     *
     * Can not be combined with "originRadius" or "destinationRadius".
     *
     */
    dateWindow?: string;
    /**
     * Local time. hh:mm:ss format, e.g 10:30:00
     */
    time?: string;
    /**
     * 1 to 12 hours around (both +and -) the local time. Possibly limited by the number of extra days when specified, i.e.  in some situations, it may not be used to exceed the maximum date range. [1-12]H format, e.g. 6H
     *
     * @remarks
     *
     * Can not be combined with "originRadius" or "destinationRadius".
     *
     */
    timeWindow?: string;
}
