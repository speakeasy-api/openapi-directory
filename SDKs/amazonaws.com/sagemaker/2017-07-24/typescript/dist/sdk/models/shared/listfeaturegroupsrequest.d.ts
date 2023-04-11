import { SpeakeasyBase } from "../../../internal/utils";
import { FeatureGroupSortByEnum } from "./featuregroupsortbyenum";
import { FeatureGroupSortOrderEnum } from "./featuregroupsortorderenum";
import { FeatureGroupStatusEnum } from "./featuregroupstatusenum";
import { OfflineStoreStatusValueEnum } from "./offlinestorestatusvalueenum";
export declare class ListFeatureGroupsRequest extends SpeakeasyBase {
    creationTimeAfter?: Date;
    creationTimeBefore?: Date;
    featureGroupStatusEquals?: FeatureGroupStatusEnum;
    maxResults?: number;
    nameContains?: string;
    nextToken?: string;
    offlineStoreStatusEquals?: OfflineStoreStatusValueEnum;
    sortBy?: FeatureGroupSortByEnum;
    sortOrder?: FeatureGroupSortOrderEnum;
}
