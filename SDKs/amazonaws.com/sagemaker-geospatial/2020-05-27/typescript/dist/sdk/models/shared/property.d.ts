import { SpeakeasyBase } from "../../../internal/utils";
import { EoCloudCoverInput } from "./eocloudcoverinput";
import { LandsatCloudCoverLandInput } from "./landsatcloudcoverlandinput";
import { PlatformInput } from "./platforminput";
import { ViewOffNadirInput } from "./viewoffnadirinput";
import { ViewSunAzimuthInput } from "./viewsunazimuthinput";
import { ViewSunElevationInput } from "./viewsunelevationinput";
/**
 * <p/>
 */
export declare class Property extends SpeakeasyBase {
    eoCloudCover?: EoCloudCoverInput;
    landsatCloudCoverLand?: LandsatCloudCoverLandInput;
    platform?: PlatformInput;
    viewOffNadir?: ViewOffNadirInput;
    viewSunAzimuth?: ViewSunAzimuthInput;
    viewSunElevation?: ViewSunElevationInput;
}
