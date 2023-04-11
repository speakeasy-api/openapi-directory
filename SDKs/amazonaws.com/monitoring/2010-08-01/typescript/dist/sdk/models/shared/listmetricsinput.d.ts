import { SpeakeasyBase } from "../../../internal/utils";
import { DimensionFilter } from "./dimensionfilter";
import { RecentlyActiveEnum } from "./recentlyactiveenum";
export declare class ListMetricsInput extends SpeakeasyBase {
    dimensions?: DimensionFilter[];
    includeLinkedAccounts?: boolean;
    metricName?: string;
    namespace?: string;
    nextToken?: string;
    owningAccount?: string;
    recentlyActive?: RecentlyActiveEnum;
}
