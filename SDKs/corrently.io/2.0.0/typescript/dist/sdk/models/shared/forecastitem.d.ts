import { SpeakeasyBase } from "../../../internal/utils";
export declare class ForecastItem extends SpeakeasyBase {
    /**
     * CO2 footprint in Gramm per kwh (only Green Power)
     */
    co2GOekostrom?: number;
    /**
     * Local/regional energyprice modification (cent per kWh or euro per MWh).
     */
    energyprice?: number;
    /**
     * Timestamps in Seconds
     */
    epochtime?: number;
    /**
     * Actual GreenPowerIndex for given Timestamp (between 0-100)
     */
    gsi?: number;
    /**
     * Indicates if scaling is in operation to predict values
     */
    scaled?: boolean;
    /**
     * Subindex just for Solar Energy
     */
    sci?: number;
    /**
     * Timestamp in Standard Milliseconds
     */
    timeStamp?: number;
}
