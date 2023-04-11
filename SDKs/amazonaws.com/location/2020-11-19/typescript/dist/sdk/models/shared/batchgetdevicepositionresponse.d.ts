import { SpeakeasyBase } from "../../../internal/utils";
import { BatchGetDevicePositionError } from "./batchgetdevicepositionerror";
import { DevicePosition } from "./deviceposition";
/**
 * Success
 */
export declare class BatchGetDevicePositionResponse extends SpeakeasyBase {
    devicePositions: DevicePosition[];
    errors: BatchGetDevicePositionError[];
}
