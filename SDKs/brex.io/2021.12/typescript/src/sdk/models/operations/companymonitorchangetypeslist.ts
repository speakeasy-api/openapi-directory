/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

/**
 * Detailed information about the error
 */
export class CompanyMonitorChangeTypesListDefaultApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "code" })
  code: number;

  @SpeakeasyMetadata()
  @Expose({ name: "fault" })
  fault?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message: string;

  @SpeakeasyMetadata()
  @Expose({ name: "tag" })
  tag: string;
}

export class CompanyMonitorChangeTypesListResponse extends SpeakeasyBase {
  /**
   * List of ChangeTypes
   */
  @SpeakeasyMetadata()
  companyMonitorChangeTypesList200ApplicationJSONStrings?: string[];

  /**
   * Detailed information about the error
   */
  @SpeakeasyMetadata()
  companyMonitorChangeTypesListDefaultApplicationJSONObject?: CompanyMonitorChangeTypesListDefaultApplicationJSON;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
