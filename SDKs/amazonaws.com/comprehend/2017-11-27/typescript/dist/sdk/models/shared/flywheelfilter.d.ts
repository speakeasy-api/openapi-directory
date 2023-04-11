import { SpeakeasyBase } from "../../../internal/utils";
import { FlywheelStatusEnum } from "./flywheelstatusenum";
/**
 * Filter the flywheels based on creation time or flywheel status.
 */
export declare class FlywheelFilter extends SpeakeasyBase {
    creationTimeAfter?: Date;
    creationTimeBefore?: Date;
    status?: FlywheelStatusEnum;
}
