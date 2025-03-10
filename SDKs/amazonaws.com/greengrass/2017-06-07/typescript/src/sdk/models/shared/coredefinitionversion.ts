/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Core } from "./core";
import { Expose, Type } from "class-transformer";

/**
 * Information about a core definition version.
 */
export class CoreDefinitionVersion extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: Core })
  @Expose({ name: "Cores" })
  @Type(() => Core)
  cores?: Core[];
}
