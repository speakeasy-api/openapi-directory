/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform } from "class-transformer";

export class ReportDate extends SpeakeasyBase {
  /**
   * Date the record was created
   */
  @SpeakeasyMetadata()
  @Expose({ name: "create_date" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createDate?: Date;

  /**
   * Date the report is due
   */
  @SpeakeasyMetadata()
  @Expose({ name: "due_date" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  dueDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "report_type" })
  reportType?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "report_type_full" })
  reportTypeFull?: string;

  /**
   *
   * @remarks
   * Forms with coverage date -
   *     year from the coverage ending date.
   * Forms without coverage date -
   *     year from the receipt date.
   *
   */
  @SpeakeasyMetadata()
  @Expose({ name: "report_year" })
  reportYear?: number;

  /**
   * Date the record was updated
   */
  @SpeakeasyMetadata()
  @Expose({ name: "update_date" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  updateDate?: Date;
}
