import { SpeakeasyBase } from "../../../internal/utils";
export declare class Environment extends SpeakeasyBase {
    /**
     * Clutter loss. 0=None/DSM only, 1=Hard / LOS mode, 2=Soft / NLOS mode
     */
    cll?: number;
    /**
     * Clutter mode. 0=None/DSM only, 1=System & custom clutter, 2=Custom clutter only
     */
    clm?: number;
    /**
     * Clutter attenuation override in dB/m based on a tree block OR hollow building. Light foliage=0.1dB/m, brick=1.0dB/m, concrete=5dB/m
     */
    mat?: number;
}
