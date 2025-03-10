/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import {
  objectToClass,
  SpeakeasyBase,
  SpeakeasyMetadata,
} from "../../../internal/utils";
import { ParameterConstraints } from "./parameterconstraints";
import { Expose, Transform } from "class-transformer";

/**
 * Success
 */
export class CreateRouteResponseResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "ModelSelectionExpression" })
  modelSelectionExpression?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "ResponseModels" })
  responseModels?: Record<string, string>;

  @SpeakeasyMetadata({ elemType: ParameterConstraints })
  @Expose({ name: "ResponseParameters" })
  @Transform(
    ({ value }) => {
      const obj: Record<string, ParameterConstraints> = {};
      for (const key in value) {
        obj[key] = objectToClass(value[key], ParameterConstraints);
      }
      return obj;
    },
    { toClassOnly: true }
  )
  responseParameters?: Record<string, ParameterConstraints>;

  @SpeakeasyMetadata()
  @Expose({ name: "RouteResponseId" })
  routeResponseId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "RouteResponseKey" })
  routeResponseKey?: string;
}
