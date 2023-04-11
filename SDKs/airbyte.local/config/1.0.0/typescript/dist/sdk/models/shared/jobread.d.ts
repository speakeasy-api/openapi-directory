import { SpeakeasyBase } from "../../../internal/utils";
import { JobConfigTypeEnum } from "./jobconfigtypeenum";
import { JobStatusEnum } from "./jobstatusenum";
import { ResetConfig } from "./resetconfig";
export declare class JobRead extends SpeakeasyBase {
    configId: string;
    configType: JobConfigTypeEnum;
    createdAt: number;
    id: number;
    /**
     * contains information about how a reset was configured. only populated if the job was a reset.
     */
    resetConfig?: ResetConfig;
    startedAt?: number;
    status: JobStatusEnum;
    updatedAt: number;
}
