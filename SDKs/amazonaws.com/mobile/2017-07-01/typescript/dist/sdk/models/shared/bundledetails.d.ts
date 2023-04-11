import { SpeakeasyBase } from "../../../internal/utils";
import { PlatformEnum } from "./platformenum";
/**
 *  The details of the bundle.
 */
export declare class BundleDetails extends SpeakeasyBase {
    /**
     *  Developer desktop or mobile app or website platforms.
     */
    availablePlatforms?: PlatformEnum[];
    /**
     *  Unique bundle identifier.
     */
    bundleId?: string;
    /**
     *  Description of the download bundle.
     */
    description?: string;
    /**
     *  Icon for the download bundle.
     */
    iconUrl?: string;
    /**
     *  Title of the download bundle.
     */
    title?: string;
    /**
     *  Version of the download bundle.
     */
    version?: string;
}
