import { SpeakeasyBase } from "../../../internal/utils";
import { FlywheelStatusEnum } from "./flywheelstatusenum";
import { ModelTypeEnum } from "./modeltypeenum";
/**
 * Flywheel summary information.
 */
export declare class FlywheelSummary extends SpeakeasyBase {
    activeModelArn?: string;
    creationTime?: Date;
    dataLakeS3Uri?: string;
    flywheelArn?: string;
    lastModifiedTime?: Date;
    latestFlywheelIteration?: string;
    message?: string;
    modelType?: ModelTypeEnum;
    status?: FlywheelStatusEnum;
}
