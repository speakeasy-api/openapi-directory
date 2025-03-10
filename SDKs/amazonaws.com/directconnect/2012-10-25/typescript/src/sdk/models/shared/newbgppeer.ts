/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AddressFamilyEnum } from "./addressfamilyenum";
import { Expose } from "class-transformer";

/**
 * Information about a new BGP peer.
 */
export class NewBGPPeer extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "addressFamily" })
  addressFamily?: AddressFamilyEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "amazonAddress" })
  amazonAddress?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "asn" })
  asn?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "authKey" })
  authKey?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "customerAddress" })
  customerAddress?: string;
}
