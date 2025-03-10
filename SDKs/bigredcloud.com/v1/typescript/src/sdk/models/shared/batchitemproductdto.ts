/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ProductDto } from "./productdto";
import { Expose, Type } from "class-transformer";

/**
 * 1 - Create
 *
 * @remarks
 * 2 - Update
 * 3 - Delete
 */
export enum BatchItemProductDtoOpCodeEnum {
  One = "1",
  Two = "2",
  Three = "3",
}

export class BatchItemProductDto extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "item" })
  @Type(() => ProductDto)
  item?: ProductDto;

  /**
   * 1 - Create
   *
   * @remarks
   * 2 - Update
   * 3 - Delete
   */
  @SpeakeasyMetadata()
  @Expose({ name: "opCode" })
  opCode?: BatchItemProductDtoOpCodeEnum;
}
