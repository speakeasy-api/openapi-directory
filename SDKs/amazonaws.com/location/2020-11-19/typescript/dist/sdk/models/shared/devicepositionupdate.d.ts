import { SpeakeasyBase } from "../../../internal/utils";
import { PositionalAccuracy } from "./positionalaccuracy";
/**
 * Contains the position update details for a device.
 */
export declare class DevicePositionUpdate extends SpeakeasyBase {
    accuracy?: PositionalAccuracy;
    deviceId: string;
    position: number[];
    positionProperties?: Record<string, string>;
    sampleTime: Date;
}
