import { SpeakeasyBase } from "../../../internal/utils";
import { EdgeModel } from "./edgemodel";
/**
 * Success
 */
export declare class DescribeDeviceResponse extends SpeakeasyBase {
    agentVersion?: string;
    description?: string;
    deviceArn?: string;
    deviceFleetName: string;
    deviceName: string;
    iotThingName?: string;
    latestHeartbeat?: Date;
    maxModels?: number;
    models?: EdgeModel[];
    nextToken?: string;
    registrationTime: Date;
}
