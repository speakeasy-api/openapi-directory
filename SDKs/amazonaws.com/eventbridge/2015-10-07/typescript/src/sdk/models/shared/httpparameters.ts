/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * These are custom parameter to be used when the target is an API Gateway APIs or EventBridge ApiDestinations. In the latter case, these are merged with any InvocationParameters specified on the Connection, with any values from the Connection taking precedence.
 */
export class HttpParameters extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "HeaderParameters" })
  headerParameters?: Record<string, string>;

  @SpeakeasyMetadata()
  @Expose({ name: "PathParameterValues" })
  pathParameterValues?: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "QueryStringParameters" })
  queryStringParameters?: Record<string, string>;
}
