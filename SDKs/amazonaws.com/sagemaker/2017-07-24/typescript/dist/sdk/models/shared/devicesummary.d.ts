import { SpeakeasyBase } from "../../../internal/utils";
import { EdgeModelSummary } from "./edgemodelsummary";
/**
 * Summary of the device.
 */
export declare class DeviceSummary extends SpeakeasyBase {
    agentVersion?: string;
    description?: string;
    deviceArn: string;
    deviceFleetName?: string;
    deviceName: string;
    iotThingName?: string;
    latestHeartbeat?: Date;
    models?: EdgeModelSummary[];
    registrationTime?: Date;
}
