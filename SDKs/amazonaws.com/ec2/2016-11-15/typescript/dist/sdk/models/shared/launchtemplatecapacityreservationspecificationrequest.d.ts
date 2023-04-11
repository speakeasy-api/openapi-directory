import { SpeakeasyBase } from "../../../internal/utils";
import { CapacityReservationPreferenceEnum } from "./capacityreservationpreferenceenum";
import { CapacityReservationTarget } from "./capacityreservationtarget";
/**
 * Describes an instance's Capacity Reservation targeting option. You can specify only one option at a time. Use the <code>CapacityReservationPreference</code> parameter to configure the instance to run in On-Demand capacity or to run in any <code>open</code> Capacity Reservation that has matching attributes (instance type, platform, Availability Zone). Use the <code>CapacityReservationTarget</code> parameter to explicitly target a specific Capacity Reservation or a Capacity Reservation group.
 */
export declare class LaunchTemplateCapacityReservationSpecificationRequest extends SpeakeasyBase {
    capacityReservationPreference?: CapacityReservationPreferenceEnum;
    capacityReservationTarget?: CapacityReservationTarget;
}
