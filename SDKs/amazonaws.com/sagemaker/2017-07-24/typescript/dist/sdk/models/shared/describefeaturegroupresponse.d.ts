import { SpeakeasyBase } from "../../../internal/utils";
import { FeatureDefinition } from "./featuredefinition";
import { FeatureGroupStatusEnum } from "./featuregroupstatusenum";
import { LastUpdateStatus } from "./lastupdatestatus";
import { OfflineStoreConfig } from "./offlinestoreconfig";
import { OfflineStoreStatus } from "./offlinestorestatus";
import { OnlineStoreConfig } from "./onlinestoreconfig";
/**
 * Success
 */
export declare class DescribeFeatureGroupResponse extends SpeakeasyBase {
    creationTime: Date;
    description?: string;
    eventTimeFeatureName: string;
    failureReason?: string;
    featureDefinitions: FeatureDefinition[];
    featureGroupArn: string;
    featureGroupName: string;
    featureGroupStatus?: FeatureGroupStatusEnum;
    lastModifiedTime?: Date;
    lastUpdateStatus?: LastUpdateStatus;
    nextToken: string;
    offlineStoreConfig?: OfflineStoreConfig;
    offlineStoreStatus?: OfflineStoreStatus;
    onlineStoreConfig?: OnlineStoreConfig;
    onlineStoreTotalSizeBytes?: number;
    recordIdentifierFeatureName: string;
    roleArn?: string;
}
