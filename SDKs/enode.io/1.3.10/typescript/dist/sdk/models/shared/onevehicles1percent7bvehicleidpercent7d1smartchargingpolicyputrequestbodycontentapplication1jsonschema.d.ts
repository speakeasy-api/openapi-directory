import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Successful
 */
export declare class Onevehicles1Percent7BvehicleIdPercent7D1smartChargingPolicyPutRequestBodyContentApplication1jsonSchema extends SpeakeasyBase {
    /**
     * The deadline for fully charging the vehicle. Smart charging does not work without setting a deadline. The deadline is expressed as a time on a 24h clock in UTC
     */
    deadline?: string;
    /**
     * When enabled, this vehicle's charging status may be controlled by Smart Charging.
     */
    isEnabled?: boolean;
}
