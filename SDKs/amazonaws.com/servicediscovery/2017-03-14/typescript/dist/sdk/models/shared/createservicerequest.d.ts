import { SpeakeasyBase } from "../../../internal/utils";
import { DnsConfig } from "./dnsconfig";
import { HealthCheckConfig } from "./healthcheckconfig";
import { HealthCheckCustomConfig } from "./healthcheckcustomconfig";
import { ServiceTypeOptionEnum } from "./servicetypeoptionenum";
import { Tag } from "./tag";
export declare class CreateServiceRequest extends SpeakeasyBase {
    creatorRequestId?: string;
    description?: string;
    dnsConfig?: DnsConfig;
    healthCheckConfig?: HealthCheckConfig;
    healthCheckCustomConfig?: HealthCheckCustomConfig;
    name: string;
    namespaceId?: string;
    tags?: Tag[];
    type?: ServiceTypeOptionEnum;
}
