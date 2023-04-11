import { SpeakeasyBase } from "../../../internal/utils";
export declare class Receiver extends SpeakeasyBase {
    /**
     * Altitude above ground level in metres OR feet
     */
    alt?: number;
    /**
     * Latitude in decimal degrees
     */
    lat?: number;
    /**
     * Longitude in decimal degrees
     */
    lon?: number;
    /**
     * Receiver antenna gain in dBi
     */
    rxg?: number;
    /**
     * Receiver sensitivity/threshold in measured units defined by 'out' param
     */
    rxs?: number;
}
