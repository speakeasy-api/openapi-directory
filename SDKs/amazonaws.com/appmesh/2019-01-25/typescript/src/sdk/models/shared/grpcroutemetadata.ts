/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { GrpcRouteMetadataMatchMethod } from "./grpcroutemetadatamatchmethod";
import { Expose, Type } from "class-transformer";

/**
 * An object that represents the match metadata for the route.
 */
export class GrpcRouteMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "invert" })
  invert?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "match" })
  @Type(() => GrpcRouteMetadataMatchMethod)
  match?: GrpcRouteMetadataMatchMethod;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;
}
