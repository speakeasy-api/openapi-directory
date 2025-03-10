/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { DnsRecordIpTypeEnum } from "./dnsrecordiptypeenum";

/**
 * Describes the DNS options for an endpoint.
 */
export class DnsOptionsSpecification extends SpeakeasyBase {
  @SpeakeasyMetadata()
  dnsRecordIpType?: DnsRecordIpTypeEnum;

  @SpeakeasyMetadata()
  privateDnsOnlyForInboundResolverEndpoint?: boolean;
}
