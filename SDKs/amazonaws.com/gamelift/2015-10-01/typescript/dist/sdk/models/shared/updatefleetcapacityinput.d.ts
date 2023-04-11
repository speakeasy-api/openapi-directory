import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateFleetCapacityInput extends SpeakeasyBase {
    desiredInstances?: number;
    fleetId: string;
    location?: string;
    maxSize?: number;
    minSize?: number;
}
