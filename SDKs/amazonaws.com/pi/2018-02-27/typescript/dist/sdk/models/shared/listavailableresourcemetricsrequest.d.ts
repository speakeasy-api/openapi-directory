import { SpeakeasyBase } from "../../../internal/utils";
import { ServiceTypeEnum } from "./servicetypeenum";
export declare class ListAvailableResourceMetricsRequest extends SpeakeasyBase {
    identifier: string;
    maxResults?: number;
    metricTypes: string[];
    nextToken?: string;
    serviceType: ServiceTypeEnum;
}
