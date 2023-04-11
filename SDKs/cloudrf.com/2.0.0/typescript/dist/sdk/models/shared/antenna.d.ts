import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Antenna polarization as either h or v
 */
export declare enum AntennaPolEnum {
    H = "h",
    V = "v"
}
export declare class Antenna extends SpeakeasyBase {
    /**
     * Antenna pattern code. 1=Vertical dipole (Omni-directional)
     */
    ant?: number;
    /**
     * Antenna azimuth in degrees north
     */
    azi?: number;
    /**
     * Custom antenna horizontal beamwidth in degrees. For use only with ant=0
     */
    hbw?: number;
    /**
     * Antenna polarization as either h or v
     */
    pol?: AntennaPolEnum;
    /**
     * Antenna tilt in degrees below the horizon (inverted)
     */
    tlt?: number;
    /**
     * Transmitter antenna gain in dBi
     */
    txg?: number;
    /**
     * Feeder loss in dB
     */
    txl?: number;
    /**
     * Custom antenna vertical beamwidth in degrees. For use only with ant=0
     */
    vbw?: number;
}
