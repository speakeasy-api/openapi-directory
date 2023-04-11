import { SpeakeasyBase } from "../../../internal/utils";
import { UsageLimitFeatureTypeEnum } from "./usagelimitfeaturetypeenum";
export declare class DescribeUsageLimitsMessage extends SpeakeasyBase {
    clusterIdentifier?: string;
    featureType?: UsageLimitFeatureTypeEnum;
    marker?: string;
    maxRecords?: number;
    tagKeys?: string[];
    tagValues?: string[];
    usageLimitId?: string;
}
