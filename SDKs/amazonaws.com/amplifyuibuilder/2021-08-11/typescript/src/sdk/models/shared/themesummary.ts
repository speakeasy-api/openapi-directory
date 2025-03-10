/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Describes the basic information about a theme.
 */
export class ThemeSummary extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "appId" })
  appId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "environmentName" })
  environmentName: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;
}
