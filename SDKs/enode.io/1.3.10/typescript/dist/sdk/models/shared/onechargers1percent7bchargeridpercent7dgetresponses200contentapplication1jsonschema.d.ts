import { SpeakeasyBase } from "../../../internal/utils";
export declare class Onechargers1Percent7BchargerIdPercent7DGetResponses200ContentApplication1jsonSchemaChargeState extends SpeakeasyBase {
    /**
     * The current charge rate in kW.
     *
     * @remarks
     *
     * This property is only available when the charger is actively charging a vehicle, and is `null` any other time.
     */
    chargeRate?: number;
    /**
     * Current charging status
     */
    isCharging?: boolean;
    /**
     * Indicates whether the charger has a vehicle plugged into it (regardless of whether that vehicle is actually charging)
     */
    isPluggedIn?: boolean;
}
/**
 * Descriptive information about the Charger
 */
export declare class Onechargers1Percent7BchargerIdPercent7DGetResponses200ContentApplication1jsonSchemaInformation extends SpeakeasyBase {
    /**
     * Charger brand
     */
    brand?: string;
    /**
     * Charger ID
     */
    id?: string;
    /**
     * Charger model
     */
    model?: string;
    /**
     * Charger production year
     */
    year?: number;
}
export declare class Onechargers1Percent7BchargerIdPercent7DGetResponses200ContentApplication1jsonSchema extends SpeakeasyBase {
    chargeState?: Onechargers1Percent7BchargerIdPercent7DGetResponses200ContentApplication1jsonSchemaChargeState;
    /**
     * Charger ID
     */
    id?: string;
    /**
     * Descriptive information about the Charger
     */
    information?: Onechargers1Percent7BchargerIdPercent7DGetResponses200ContentApplication1jsonSchemaInformation;
    /**
     * Is the charger currently reachable?
     */
    isReachable?: boolean;
    /**
     * The last time the charger was successfully communicated with
     */
    lastSeen?: Date;
}
