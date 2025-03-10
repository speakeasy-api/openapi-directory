/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { PrivateDnsPropertiesMutable } from "./privatednspropertiesmutable";
import { Expose, Type } from "class-transformer";

/**
 * DNS properties for the private DNS namespace.
 */
export class PrivateDnsNamespaceProperties extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "DnsProperties" })
  @Type(() => PrivateDnsPropertiesMutable)
  dnsProperties: PrivateDnsPropertiesMutable;
}
