/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class FilesSearch extends SpeakeasyBase {
  /**
   * ID of the drive to filter on
   */
  @SpeakeasyMetadata()
  @Expose({ name: "drive_id" })
  driveId?: string;

  /**
   * The query to search for. May match across multiple fields.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "query" })
  query: string;
}
