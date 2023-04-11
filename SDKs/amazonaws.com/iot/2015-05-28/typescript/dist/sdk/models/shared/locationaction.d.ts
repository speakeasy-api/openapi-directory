import { SpeakeasyBase } from "../../../internal/utils";
import { LocationTimestamp } from "./locationtimestamp";
/**
 * The Amazon Location rule action sends device location updates from an MQTT message to an Amazon Location tracker resource.
 */
export declare class LocationAction extends SpeakeasyBase {
    deviceId: string;
    latitude: string;
    longitude: string;
    roleArn: string;
    timestamp?: LocationTimestamp;
    trackerName: string;
}
