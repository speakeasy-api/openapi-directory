import { SpeakeasyBase } from "../../../internal/utils";
import { SupportedPlatformsList } from "./supportedplatformslist";
/**
 * Describes an availability zone.
 */
export declare class AvailabilityZone extends SpeakeasyBase {
    name?: string;
    supportedPlatforms?: SupportedPlatformsList[];
}
