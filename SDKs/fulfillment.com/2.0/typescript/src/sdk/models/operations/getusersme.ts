/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";

export class GetUsersMeUserContactV2UserContactV2Merchant extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: number;
}

export class GetUsersMeUserContactV2UserContactV2 extends SpeakeasyBase {
  /**
   * Depricated
   */
  @SpeakeasyMetadata()
  @Expose({ name: "apiKey" })
  apiKey?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "contactInfo" })
  @Type(
    () =>
      shared.OneordersPostResponses201ContentApplication1jsonSchemaPropertiesOriginalConsignee
  )
  contactInfo?: shared.OneordersPostResponses201ContentApplication1jsonSchemaPropertiesOriginalConsignee;

  @SpeakeasyMetadata()
  @Expose({ name: "createDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "deptLeader" })
  deptLeader?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: number;

  @SpeakeasyMetadata()
  @Expose({ name: "merchant" })
  @Type(() => GetUsersMeUserContactV2UserContactV2Merchant)
  merchant?: GetUsersMeUserContactV2UserContactV2Merchant;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "updatedAt" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  updatedAt?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "updatedBy" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  updatedBy?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "username" })
  username?: string;
}

export class GetUsersMeUserContactV2Merchant extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: number;
}

/**
 * User
 */
export class GetUsersMeUserContactV2 extends SpeakeasyBase {
  /**
   * Depricated
   */
  @SpeakeasyMetadata()
  @Expose({ name: "apiKey" })
  apiKey?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "contactInfo" })
  @Type(() => GetUsersMeUserContactV2UserContactV2)
  contactInfo?: GetUsersMeUserContactV2UserContactV2;

  @SpeakeasyMetadata()
  @Expose({ name: "createDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "deptLeader" })
  deptLeader?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: number;

  @SpeakeasyMetadata()
  @Expose({ name: "merchant" })
  @Type(() => GetUsersMeUserContactV2Merchant)
  merchant?: GetUsersMeUserContactV2Merchant;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "updatedAt" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  updatedAt?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "updatedBy" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  updatedBy?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "username" })
  username?: string;
}

export class GetUsersMeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * User
   */
  @SpeakeasyMetadata()
  userContactV2?: GetUsersMeUserContactV2;
}
