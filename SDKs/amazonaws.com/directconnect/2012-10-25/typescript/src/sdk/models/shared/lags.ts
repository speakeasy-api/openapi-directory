/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Lag } from "./lag";
import { Expose, Type } from "class-transformer";

/**
 * Success
 */
export class Lags extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: Lag })
  @Expose({ name: "lags" })
  @Type(() => Lag)
  lags?: Lag[];
}
