import { SpeakeasyBase } from "../../../internal/utils";
import { DimensionGroup } from "./dimensiongroup";
import { ServiceTypeEnum } from "./servicetypeenum";
export declare class DescribeDimensionKeysRequest extends SpeakeasyBase {
    additionalMetrics?: string[];
    endTime: Date;
    filter?: Record<string, string>;
    groupBy: DimensionGroup;
    identifier: string;
    maxResults?: number;
    metric: string;
    nextToken?: string;
    partitionBy?: DimensionGroup;
    periodInSeconds?: number;
    serviceType: ServiceTypeEnum;
    startTime: Date;
}
