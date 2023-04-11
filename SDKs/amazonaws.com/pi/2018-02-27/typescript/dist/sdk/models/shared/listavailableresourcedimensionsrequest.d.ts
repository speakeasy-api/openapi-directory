import { SpeakeasyBase } from "../../../internal/utils";
import { ServiceTypeEnum } from "./servicetypeenum";
export declare class ListAvailableResourceDimensionsRequest extends SpeakeasyBase {
    identifier: string;
    maxResults?: number;
    metrics: string[];
    nextToken?: string;
    serviceType: ServiceTypeEnum;
}
