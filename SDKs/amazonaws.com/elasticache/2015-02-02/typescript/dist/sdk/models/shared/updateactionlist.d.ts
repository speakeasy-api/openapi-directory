import { SpeakeasyBase } from "../../../internal/utils";
import { CacheNodeUpdateStatusList } from "./cachenodeupdatestatuslist";
import { NodeGroupUpdateStatusList } from "./nodegroupupdatestatuslist";
import { ServiceUpdateSeverityEnum } from "./serviceupdateseverityenum";
import { ServiceUpdateStatusEnum } from "./serviceupdatestatusenum";
import { ServiceUpdateTypeEnum } from "./serviceupdatetypeenum";
import { SlaMetEnum } from "./slametenum";
import { UpdateActionStatusEnum } from "./updateactionstatusenum";
/**
 * The status of the service update for a specific replication group
**/
export declare class UpdateActionList extends SpeakeasyBase {
    cacheClusterId?: string;
    cacheNodeUpdateStatus?: CacheNodeUpdateStatusList[];
    engine?: string;
    estimatedUpdateTime?: string;
    nodeGroupUpdateStatus?: NodeGroupUpdateStatusList[];
    nodesUpdated?: string;
    replicationGroupId?: string;
    serviceUpdateName?: string;
    serviceUpdateRecommendedApplyByDate?: Date;
    serviceUpdateReleaseDate?: Date;
    serviceUpdateSeverity?: ServiceUpdateSeverityEnum;
    serviceUpdateStatus?: ServiceUpdateStatusEnum;
    serviceUpdateType?: ServiceUpdateTypeEnum;
    slaMet?: SlaMetEnum;
    updateActionAvailableDate?: Date;
    updateActionStatus?: UpdateActionStatusEnum;
    updateActionStatusModifiedDate?: Date;
}
