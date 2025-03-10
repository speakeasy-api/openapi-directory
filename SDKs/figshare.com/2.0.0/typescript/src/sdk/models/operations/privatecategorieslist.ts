/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class PrivateCategoriesListResponse extends SpeakeasyBase {
  /**
   * OK. An array of categories
   */
  @SpeakeasyMetadata({ elemType: shared.Category })
  categories?: shared.Category[];

  @SpeakeasyMetadata()
  contentType: string;

  /**
   * Forbidden
   */
  @SpeakeasyMetadata()
  errorMessage?: shared.ErrorMessage;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
