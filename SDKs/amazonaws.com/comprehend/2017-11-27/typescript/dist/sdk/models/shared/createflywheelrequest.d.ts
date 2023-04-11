import { SpeakeasyBase } from "../../../internal/utils";
import { DataSecurityConfig } from "./datasecurityconfig";
import { ModelTypeEnum } from "./modeltypeenum";
import { Tag } from "./tag";
import { TaskConfig } from "./taskconfig";
export declare class CreateFlywheelRequest extends SpeakeasyBase {
    activeModelArn?: string;
    clientRequestToken?: string;
    dataAccessRoleArn: string;
    dataLakeS3Uri: string;
    dataSecurityConfig?: DataSecurityConfig;
    flywheelName: string;
    modelType?: ModelTypeEnum;
    tags?: Tag[];
    taskConfig?: TaskConfig;
}
