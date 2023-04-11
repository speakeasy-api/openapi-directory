import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeviceRegistrationWindow extends SpeakeasyBase {
    /**
     * The end date of the current period.
     *
     * @remarks
     *
     * This is based on the value of `startDate` plus the number of days defined by  `periodDays`.
     *
     */
    endDate: Date;
    /**
     * The maximum de/registrations that can be made in a period.
     */
    limit: number;
    /**
     * The number of days a de/registration period runs for.
     */
    periodDays: number;
    /**
     * The remaining de/registrations that can be made in the current period.
     */
    remaining: number;
    /**
     * The start date of the current period.
     *
     * @remarks
     *
     * This is based on the earliest device de/registrations in the past N days, where
     * N is defined by `periodDays`.
     *
     * If no device has been de/registered then start date will be from the current date.
     *
     */
    startDate: Date;
}
