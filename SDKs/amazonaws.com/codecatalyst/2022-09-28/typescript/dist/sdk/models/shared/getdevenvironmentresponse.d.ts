import { SpeakeasyBase } from "../../../internal/utils";
import { DevEnvironmentRepositorySummary } from "./devenvironmentrepositorysummary";
import { DevEnvironmentStatusEnum } from "./devenvironmentstatusenum";
import { Ide } from "./ide";
import { InstanceTypeEnum } from "./instancetypeenum";
import { PersistentStorage } from "./persistentstorage";
/**
 * Success
 */
export declare class GetDevEnvironmentResponse extends SpeakeasyBase {
    alias?: string;
    creatorId: string;
    id: string;
    ides?: Ide[];
    inactivityTimeoutMinutes: number;
    instanceType: InstanceTypeEnum;
    lastUpdatedTime: Date;
    persistentStorage: PersistentStorage;
    projectName: string;
    repositories: DevEnvironmentRepositorySummary[];
    spaceName: string;
    status: DevEnvironmentStatusEnum;
    statusReason?: string;
}
