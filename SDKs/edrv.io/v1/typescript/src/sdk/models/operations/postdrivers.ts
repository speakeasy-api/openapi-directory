/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class PostDriversRequestBodyAddress extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "city" })
  city?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "country" })
  country?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "postalCode" })
  postalCode?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "streetAndNumber" })
  streetAndNumber?: string;
}

export class PostDriversRequestBodyPhone extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "home" })
  home?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "mobile" })
  mobile?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "work" })
  work?: string;
}

export enum PostDriversRequestBodySourceEnum {
  Physical = "physical",
  Slack = "slack",
  Telegram = "telegram",
  Sms = "sms",
}

/**
 * Include driver properties to create here
 */
export class PostDriversRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "active" })
  active?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "address" })
  @Type(() => PostDriversRequestBodyAddress)
  address?: PostDriversRequestBodyAddress;

  @SpeakeasyMetadata()
  @Expose({ name: "email" })
  email?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "firstname" })
  firstname: string;

  @SpeakeasyMetadata()
  @Expose({ name: "lastname" })
  lastname: string;

  @SpeakeasyMetadata()
  @Expose({ name: "phone" })
  @Type(() => PostDriversRequestBodyPhone)
  phone?: PostDriversRequestBodyPhone;

  @SpeakeasyMetadata()
  @Expose({ name: "source" })
  source: PostDriversRequestBodySourceEnum;
}

/**
 * Returns the newly created driver object
 */
export class PostDrivers200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "ok" })
  ok?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "result" })
  result?: Record<string, any>;
}

export class PostDriversResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * Returns the newly created driver object
   */
  @SpeakeasyMetadata()
  postDrivers200ApplicationJSONObject?: PostDrivers200ApplicationJSON;
}
