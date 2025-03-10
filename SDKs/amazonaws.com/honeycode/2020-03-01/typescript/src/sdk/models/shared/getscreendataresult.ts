/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import {
  objectToClass,
  SpeakeasyBase,
  SpeakeasyMetadata,
} from "../../../internal/utils";
import { ResultSet } from "./resultset";
import { Expose, Transform } from "class-transformer";

/**
 * Success
 */
export class GetScreenDataResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ elemType: ResultSet })
  @Expose({ name: "results" })
  @Transform(
    ({ value }) => {
      const obj: Record<string, ResultSet> = {};
      for (const key in value) {
        obj[key] = objectToClass(value[key], ResultSet);
      }
      return obj;
    },
    { toClassOnly: true }
  )
  results: Record<string, ResultSet>;

  @SpeakeasyMetadata()
  @Expose({ name: "workbookCursor" })
  workbookCursor: number;
}
