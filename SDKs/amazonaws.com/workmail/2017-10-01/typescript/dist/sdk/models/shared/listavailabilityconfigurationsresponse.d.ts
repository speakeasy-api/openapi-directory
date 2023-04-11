import { SpeakeasyBase } from "../../../internal/utils";
import { AvailabilityConfiguration } from "./availabilityconfiguration";
/**
 * Success
 */
export declare class ListAvailabilityConfigurationsResponse extends SpeakeasyBase {
    availabilityConfigurations?: AvailabilityConfiguration[];
    nextToken?: string;
}
