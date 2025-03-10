/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class FailedIpn extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "action" })
  action: string;

  @SpeakeasyMetadata()
  @Expose({ name: "amount" })
  amount: string;

  @SpeakeasyMetadata()
  @Expose({ name: "contractaddress" })
  contractaddress: string;

  @SpeakeasyMetadata()
  @Expose({ name: "ethereumaddress" })
  ethereumaddress: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "timestamp" })
  timestamp: string;

  @SpeakeasyMetadata()
  @Expose({ name: "url" })
  url: string;
}
