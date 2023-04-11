import { SpeakeasyBase } from "../../../internal/utils";
export declare class Ommeters extends SpeakeasyBase {
    /**
     * Factor imposed on metered current by a transducer
     */
    currentScalingFactor?: number;
    /**
     * Metering load profile type associated with the meter
     */
    loadProfileType?: string;
    /**
     * Basic address information for geo coding
     */
    location?: string;
    /**
     * DLMS manufacturerId
     */
    manufacturerId?: string;
    /**
     * Physical quantity being measured by the meter
     */
    measurementType?: string;
    /**
     * Statistical metadata for this household
     */
    meta?: string;
    /**
     * identifier to be used in other methods like readings or activities.
     */
    meterId?: string;
    /**
     * Factor imposed on metered current AND voltage by a transducer
     */
    scalingFactor?: number;
    /**
     * Device type of the meter
     */
    type?: string;
    /**
     * Factor imposed on metered voltage by a transducer
     */
    voltageScalingFactor?: number;
}
