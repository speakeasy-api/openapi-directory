/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { IpAddressTypeEnum } from "./ipaddresstypeenum";

export class DNSRuleDescriptor extends SpeakeasyBase {
  /**
   * Identifies the DNS Rule
   */
  @SpeakeasyMetadata()
  dnsRuleId: string;

  /**
   * FQDN of the DNS rule
   */
  @SpeakeasyMetadata()
  domainName: string;

  /**
   * IP address given by the DNS rule
   */
  @SpeakeasyMetadata()
  ipAddress: string;

  /**
   * Specifies the IP address type
   */
  @SpeakeasyMetadata()
  ipAddressType: IpAddressTypeEnum;

  /**
   * Time-to-live value
   */
  @SpeakeasyMetadata()
  ttl?: number;
}
