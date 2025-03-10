/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ReportFilterParameters } from "./reportfilterparameters";
import { Expose, Type } from "class-transformer";

export class SaveReportFilterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "parameters" })
  @Type(() => ReportFilterParameters)
  parameters: ReportFilterParameters;

  /**
   * Report filter name
   */
  @SpeakeasyMetadata()
  @Expose({ name: "reportFilterName" })
  reportFilterName: string;
}
