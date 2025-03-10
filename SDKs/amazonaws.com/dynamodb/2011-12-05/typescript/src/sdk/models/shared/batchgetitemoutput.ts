/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import {
  objectToClass,
  SpeakeasyBase,
  SpeakeasyMetadata,
} from "../../../internal/utils";
import { BatchResponse } from "./batchresponse";
import { KeysAndAttributes } from "./keysandattributes";
import { Expose, Transform } from "class-transformer";

/**
 * Success
 */
export class BatchGetItemOutput extends SpeakeasyBase {
  /**
   * Table names and the respective item attributes from the tables.
   */
  @SpeakeasyMetadata({ elemType: BatchResponse })
  @Expose({ name: "Responses" })
  @Transform(
    ({ value }) => {
      const obj: Record<string, BatchResponse> = {};
      for (const key in value) {
        obj[key] = objectToClass(value[key], BatchResponse);
      }
      return obj;
    },
    { toClassOnly: true }
  )
  responses?: Record<string, BatchResponse>;

  @SpeakeasyMetadata({ elemType: KeysAndAttributes })
  @Expose({ name: "UnprocessedKeys" })
  @Transform(
    ({ value }) => {
      const obj: Record<string, KeysAndAttributes> = {};
      for (const key in value) {
        obj[key] = objectToClass(value[key], KeysAndAttributes);
      }
      return obj;
    },
    { toClassOnly: true }
  )
  unprocessedKeys?: Record<string, KeysAndAttributes>;
}
