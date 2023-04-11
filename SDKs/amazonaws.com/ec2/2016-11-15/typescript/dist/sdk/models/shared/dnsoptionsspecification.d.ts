import { SpeakeasyBase } from "../../../internal/utils";
import { DnsRecordIpTypeEnum } from "./dnsrecordiptypeenum";
/**
 * Describes the DNS options for an endpoint.
 */
export declare class DnsOptionsSpecification extends SpeakeasyBase {
    dnsRecordIpType?: DnsRecordIpTypeEnum;
    privateDnsOnlyForInboundResolverEndpoint?: boolean;
}
