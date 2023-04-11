import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about an override specified for an on-call rotation.
 */
export declare class RotationOverride extends SpeakeasyBase {
    createTime: Date;
    endTime: Date;
    newContactIds: string[];
    rotationOverrideId: string;
    startTime: Date;
}
