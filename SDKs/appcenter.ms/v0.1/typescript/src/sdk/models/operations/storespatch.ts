/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

export class StoresPatchSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "security, scheme=true;type=apiKey;subtype=header;name=X-API-Token",
  })
  apiToken: string;
}

/**
 * Store update request
 */
export class StoresPatchRequestBody extends SpeakeasyBase {
  /**
   * Service connection id to updated.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "service_connection_id" })
  serviceConnectionId: string;
}

export class StoresPatchRequest extends SpeakeasyBase {
  /**
   * Store update request
   */
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  requestBody: StoresPatchRequestBody;

  /**
   * The name of the application
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=app_name",
  })
  appName: string;

  /**
   * The name of the owner
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=owner_name",
  })
  ownerName: string;

  /**
   * The name of the store
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=store_name",
  })
  storeName: string;
}

export enum StoresPatchDefaultApplicationJSONCodeEnum {
  BadRequest = "BadRequest",
  Conflict = "Conflict",
  NotAcceptable = "NotAcceptable",
  NotFound = "NotFound",
  InternalServerError = "InternalServerError",
  Unauthorized = "Unauthorized",
  TooManyRequests = "TooManyRequests",
}

/**
 * Error
 */
export class StoresPatchDefaultApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "code" })
  code: StoresPatchDefaultApplicationJSONCodeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message: string;
}

export class StoresPatchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * Error
   */
  @SpeakeasyMetadata()
  storesPatchDefaultApplicationJSONObject?: StoresPatchDefaultApplicationJSON;
}
