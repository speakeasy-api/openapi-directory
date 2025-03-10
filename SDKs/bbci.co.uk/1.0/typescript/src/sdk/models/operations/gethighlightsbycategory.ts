/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class GetHighlightsByCategoryRequest extends SpeakeasyBase {
  /**
   * Whether to return all, or available programmes
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=availability",
  })
  availability: shared.AvailabilityEnum;

  /**
   * The category identifier to return results from.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=category",
  })
  category: string;

  /**
   * The language for any applicable localised strings.
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang: shared.LangEnum;

  /**
   * Request additional data in the output
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mixin" })
  mixin?: shared.MixinEnum;

  /**
   * The rights group to limit results to.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=rights",
  })
  rights: shared.RightsEnum;
}

export class GetHighlightsByCategoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * Default response
   */
  @SpeakeasyMetadata()
  ibl?: any;
}
