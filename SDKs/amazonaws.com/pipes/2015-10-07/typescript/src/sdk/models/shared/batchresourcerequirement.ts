/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { BatchResourceRequirementTypeEnum } from "./batchresourcerequirementtypeenum";
import { Expose } from "class-transformer";

/**
 * The type and amount of a resource to assign to a container. The supported resources include <code>GPU</code>, <code>MEMORY</code>, and <code>VCPU</code>.
 */
export class BatchResourceRequirement extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "Type" })
  type: BatchResourceRequirementTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "Value" })
  value: string;
}
