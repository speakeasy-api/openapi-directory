import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Day when the recurrance should happen
 */
export declare enum InvoiceRecurringApiModelDayOfWeekEnum {
    Sunday = "Sunday",
    Monday = "Monday",
    Tuesday = "Tuesday",
    Wednesday = "Wednesday",
    Thursday = "Thursday",
    Friday = "Friday",
    Saturday = "Saturday"
}
/**
 * How often the recurrance occurs
 */
export declare enum InvoiceRecurringApiModelRecurrancePatternEnum {
    Daily = "Daily",
    Weekly = "Weekly",
    Monthly = "Monthly",
    Yearly = "Yearly"
}
/**
 * The status of the recurrance
 */
export declare enum InvoiceRecurringApiModelStatusEnum {
    Pending = "Pending",
    Active = "Active",
    Cancelled = "Cancelled",
    Finished = "Finished"
}
/**
 * Definition of invoice recurring profile
 */
export declare class InvoiceRecurringApiModel extends SpeakeasyBase {
    /**
     * Day of month when the recurrance should happen
     */
    dayOfMonth?: number;
    /**
     * Day when the recurrance should happen
     */
    dayOfWeek?: InvoiceRecurringApiModelDayOfWeekEnum;
    /**
     * Total number of days for the client to pay the invoice after issuing it
     */
    dueDateInDays?: number;
    /**
     * Indcate the date when the recurrance should stop
     */
    endOfRecurrance?: Date;
    /**
     * Month when the recurrance should happen
     */
    month?: number;
    /**
     * How often the recurrance occurs
     */
    recurrancePattern?: InvoiceRecurringApiModelRecurrancePatternEnum;
    /**
     * Recurring every [value] RecurrancePattern
     *
     * @remarks
     * Ex: Recur every 1 week
     */
    recurranceValue?: number;
    /**
     * Indcate the date when the recurrance has started
     */
    startOfRecurrance?: Date;
    /**
     * The status of the recurrance
     */
    status?: InvoiceRecurringApiModelStatusEnum;
    /**
     * Title of the recurring profile.
     *
     * @remarks
     * Ex: BRAND PACKAGE - 2017-08-16 - 2018-08-16
     */
    title?: string;
}
