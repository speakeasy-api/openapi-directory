import { SpeakeasyBase } from "../../../internal/utils";
import { PositionalAccuracy } from "./positionalaccuracy";
/**
 * Success
 */
export declare class GetDevicePositionResponse extends SpeakeasyBase {
    accuracy?: PositionalAccuracy;
    deviceId?: string;
    position: number[];
    positionProperties?: Record<string, string>;
    receivedTime: Date;
    sampleTime: Date;
}
