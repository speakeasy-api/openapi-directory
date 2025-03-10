/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Api } from "./api";
import { Expose, Type } from "class-transformer";

/**
 * Success
 */
export class GetApisResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: Api })
  @Expose({ name: "Items" })
  @Type(() => Api)
  items?: Api[];

  @SpeakeasyMetadata()
  @Expose({ name: "NextToken" })
  nextToken?: string;
}
