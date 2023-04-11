import { SpeakeasyBase } from "../../../internal/utils";
export declare class Transmitter extends SpeakeasyBase {
    /**
     * Altitude above ground level in metres OR feet
     */
    alt?: number;
    /**
     * Bandwidth in MHz. 1MHz has a noise floor of -114dBm. 10MHz = -104dBm, 20MHz = -101dBm
     */
    bwi?: number;
    /**
     * Centre frequency in megahertz
     */
    frq?: number;
    /**
     * Latitude in decimal degrees
     */
    lat?: number;
    /**
     * Longitude in decimal degrees
     */
    lon?: number;
    /**
     * Transmitter power in watts before the antenna
     */
    txw?: number;
}
