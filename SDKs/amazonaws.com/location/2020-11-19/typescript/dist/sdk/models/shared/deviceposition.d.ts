import { SpeakeasyBase } from "../../../internal/utils";
import { PositionalAccuracy } from "./positionalaccuracy";
/**
 * Contains the device position details.
 */
export declare class DevicePosition extends SpeakeasyBase {
    accuracy?: PositionalAccuracy;
    deviceId?: string;
    position: number[];
    positionProperties?: Record<string, string>;
    receivedTime: Date;
    sampleTime: Date;
}
