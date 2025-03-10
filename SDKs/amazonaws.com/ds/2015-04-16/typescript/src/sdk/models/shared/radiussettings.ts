/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { RadiusAuthenticationProtocolEnum } from "./radiusauthenticationprotocolenum";
import { Expose } from "class-transformer";

/**
 * Contains information about a Remote Authentication Dial In User Service (RADIUS) server.
 */
export class RadiusSettings extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "AuthenticationProtocol" })
  authenticationProtocol?: RadiusAuthenticationProtocolEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "DisplayLabel" })
  displayLabel?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "RadiusPort" })
  radiusPort?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "RadiusRetries" })
  radiusRetries?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "RadiusServers" })
  radiusServers?: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "RadiusTimeout" })
  radiusTimeout?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "SharedSecret" })
  sharedSecret?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "UseSameUsername" })
  useSameUsername?: boolean;
}
