import { SpeakeasyBase } from "../../../internal/utils";
import { DeviceTemplate } from "./devicetemplate";
/**
 * An object defining the template for a placement.
 */
export declare class PlacementTemplate extends SpeakeasyBase {
    defaultAttributes?: Record<string, string>;
    deviceTemplates?: Record<string, DeviceTemplate>;
}
