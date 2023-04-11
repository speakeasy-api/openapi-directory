import { SpeakeasyBase } from "../../../internal/utils";
import { CapacityReservationPreferenceEnum } from "./capacityreservationpreferenceenum";
import { CapacityReservationTarget } from "./capacityreservationtarget";
/**
 * <p>Describes an instance's Capacity Reservation targeting option. You can specify only one parameter at a time. If you specify <code>CapacityReservationPreference</code> and <code>CapacityReservationTarget</code>, the request fails.</p> <p>Use the <code>CapacityReservationPreference</code> parameter to configure the instance to run as an On-Demand Instance or to run in any <code>open</code> Capacity Reservation that has matching attributes (instance type, platform, Availability Zone). Use the <code>CapacityReservationTarget</code> parameter to explicitly target a specific Capacity Reservation or a Capacity Reservation group.</p>
 */
export declare class CapacityReservationSpecification extends SpeakeasyBase {
    capacityReservationPreference?: CapacityReservationPreferenceEnum;
    capacityReservationTarget?: CapacityReservationTarget;
}
