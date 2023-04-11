import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AppApiWMMEndpointsWMMMagneticFieldRequest extends SpeakeasyBase {
    /**
     * Geodetic Altitude 0 km to 600 km.
     */
    altitude: number;
    /**
     * Geodetic Latitude. -90 deg (S) to 90 deg (N).
     */
    latitude: number;
    /**
     * Geodetic Longitude. -180 deg (W) to 180 deg (E).
     */
    longitude: number;
    /**
     * Year as a decimal in the range 2015-2025 (2017.5 would be half way through 2017).
     */
    year: number;
}
/**
 * The angle in the horizontal plane between magnetic north and true north. Declination is positive when magnetic north is east of true north.
 *
 * @remarks
 *
 */
export declare class AppApiWMMEndpointsWMMMagneticField200ApplicationJSONDeclination extends SpeakeasyBase {
    units?: string;
    value?: number;
}
/**
 * Referenced to grid north, referenced to 0 deg meridian of a polar stereographic projection.  Only defined for latitudes greater than 55 degrees and less than -55 degrees (arctic and antarctic).
 *
 * @remarks
 *
 */
export declare class AppApiWMMEndpointsWMMMagneticField200ApplicationJSONGridVariation extends SpeakeasyBase {
    units?: string;
    value?: number;
}
/**
 * Also known as 'dip', is the angle made between the horizontal plane and the magnetic field vector at some position. Positive inclination corresponds to a downward pointing.
 *
 * @remarks
 *
 */
export declare class AppApiWMMEndpointsWMMMagneticField200ApplicationJSONInclination extends SpeakeasyBase {
    units?: string;
    value?: number;
}
/**
 * Total magnetic field intensity in nano Teslas.
 *
 * @remarks
 *
 */
export declare class AppApiWMMEndpointsWMMMagneticField200ApplicationJSONTotalIntensity extends SpeakeasyBase {
    units?: string;
    value?: number;
}
/**
 * Successful magnetic field intensity calculation
 */
export declare class AppApiWMMEndpointsWMMMagneticField200ApplicationJSON extends SpeakeasyBase {
    /**
     * The angle in the horizontal plane between magnetic north and true north. Declination is positive when magnetic north is east of true north.
     *
     * @remarks
     *
     */
    declination?: AppApiWMMEndpointsWMMMagneticField200ApplicationJSONDeclination;
    /**
     * Referenced to grid north, referenced to 0 deg meridian of a polar stereographic projection.  Only defined for latitudes greater than 55 degrees and less than -55 degrees (arctic and antarctic).
     *
     * @remarks
     *
     */
    gridVariation?: AppApiWMMEndpointsWMMMagneticField200ApplicationJSONGridVariation;
    /**
     * Also known as 'dip', is the angle made between the horizontal plane and the magnetic field vector at some position. Positive inclination corresponds to a downward pointing.
     *
     * @remarks
     *
     */
    inclination?: AppApiWMMEndpointsWMMMagneticField200ApplicationJSONInclination;
    /**
     * Total magnetic field intensity in nano Teslas.
     *
     * @remarks
     *
     */
    totalIntensity?: AppApiWMMEndpointsWMMMagneticField200ApplicationJSONTotalIntensity;
}
export declare class AppApiWMMEndpointsWMMMagneticFieldResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful magnetic field intensity calculation
     */
    appApiWMMEndpointsWMMMagneticField200ApplicationJSONObject?: AppApiWMMEndpointsWMMMagneticField200ApplicationJSON;
}
