import { SpeakeasyBase } from "../../../internal/utils";
import { DnsRecord } from "./dnsrecord";
import { RoutingPolicyEnum } from "./routingpolicyenum";
/**
 * <p>A complex type that contains information about the Amazon Route 53 DNS records that you want Cloud Map to create when you register an instance.</p> <important> <p>The record types of a service can only be changed by deleting the service and recreating it with a new <code>Dnsconfig</code>.</p> </important>
 */
export declare class DnsConfig extends SpeakeasyBase {
    dnsRecords: DnsRecord[];
    namespaceId?: string;
    routingPolicy?: RoutingPolicyEnum;
}
