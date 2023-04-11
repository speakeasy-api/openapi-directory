import { SpeakeasyBase } from "../../../internal/utils";
import { Eirp } from "./eirp";
import { UplinkSpectrumConfig } from "./uplinkspectrumconfig";
/**
 * Information about the uplink <code>Config</code> of an antenna.
 */
export declare class AntennaUplinkConfig extends SpeakeasyBase {
    spectrumConfig: UplinkSpectrumConfig;
    targetEirp: Eirp;
    transmitDisabled?: boolean;
}
