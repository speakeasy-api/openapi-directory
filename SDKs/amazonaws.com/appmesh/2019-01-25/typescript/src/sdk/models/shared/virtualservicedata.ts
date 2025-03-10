/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ResourceMetadata } from "./resourcemetadata";
import { VirtualServiceSpec } from "./virtualservicespec";
import { VirtualServiceStatus } from "./virtualservicestatus";
import { Expose, Type } from "class-transformer";

/**
 * An object that represents a virtual service returned by a describe operation.
 */
export class VirtualServiceData extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "meshName" })
  meshName: string;

  /**
   * An object that represents metadata for a resource.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "metadata" })
  @Type(() => ResourceMetadata)
  metadata: ResourceMetadata;

  @SpeakeasyMetadata()
  @Expose({ name: "spec" })
  @Type(() => VirtualServiceSpec)
  spec: VirtualServiceSpec;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  @Type(() => VirtualServiceStatus)
  status: VirtualServiceStatus;

  @SpeakeasyMetadata()
  @Expose({ name: "virtualServiceName" })
  virtualServiceName: string;
}
