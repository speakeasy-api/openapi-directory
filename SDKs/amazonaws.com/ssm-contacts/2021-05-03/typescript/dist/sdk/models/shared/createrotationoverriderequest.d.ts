import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateRotationOverrideRequest extends SpeakeasyBase {
    endTime: Date;
    idempotencyToken?: string;
    newContactIds: string[];
    rotationId: string;
    startTime: Date;
}
