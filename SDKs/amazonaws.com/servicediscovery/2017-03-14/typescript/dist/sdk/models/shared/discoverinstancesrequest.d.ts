import { SpeakeasyBase } from "../../../internal/utils";
import { HealthStatusFilterEnum } from "./healthstatusfilterenum";
export declare class DiscoverInstancesRequest extends SpeakeasyBase {
    healthStatus?: HealthStatusFilterEnum;
    maxResults?: number;
    namespaceName: string;
    optionalParameters?: Record<string, string>;
    queryParameters?: Record<string, string>;
    serviceName: string;
}
