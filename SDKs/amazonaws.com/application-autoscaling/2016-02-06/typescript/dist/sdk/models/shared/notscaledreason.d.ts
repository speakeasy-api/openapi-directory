import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes the reason for an activity that isn't scaled (<i>not scaled activity</i>), in machine-readable format. For help interpreting the not scaled reason details, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-scaling-activities.html">Scaling activities for Application Auto Scaling</a>.
 */
export declare class NotScaledReason extends SpeakeasyBase {
    code: string;
    currentCapacity?: number;
    maxCapacity?: number;
    minCapacity?: number;
}
