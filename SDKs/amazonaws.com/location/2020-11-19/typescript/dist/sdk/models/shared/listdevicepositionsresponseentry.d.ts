import { SpeakeasyBase } from "../../../internal/utils";
import { PositionalAccuracy } from "./positionalaccuracy";
/**
 * Contains the tracker resource details.
 */
export declare class ListDevicePositionsResponseEntry extends SpeakeasyBase {
    accuracy?: PositionalAccuracy;
    deviceId: string;
    position: number[];
    positionProperties?: Record<string, string>;
    sampleTime: Date;
}
