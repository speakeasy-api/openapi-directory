import { SpeakeasyBase } from "../../../internal/utils";
import { DataSecurityConfig } from "./datasecurityconfig";
import { FlywheelStatusEnum } from "./flywheelstatusenum";
import { ModelTypeEnum } from "./modeltypeenum";
import { TaskConfig } from "./taskconfig";
/**
 * The flywheel properties.
 */
export declare class FlywheelProperties extends SpeakeasyBase {
    activeModelArn?: string;
    creationTime?: Date;
    dataAccessRoleArn?: string;
    dataLakeS3Uri?: string;
    dataSecurityConfig?: DataSecurityConfig;
    flywheelArn?: string;
    lastModifiedTime?: Date;
    latestFlywheelIteration?: string;
    message?: string;
    modelType?: ModelTypeEnum;
    status?: FlywheelStatusEnum;
    taskConfig?: TaskConfig;
}
