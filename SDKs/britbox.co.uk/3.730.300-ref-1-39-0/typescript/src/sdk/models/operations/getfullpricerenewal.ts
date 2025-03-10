/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class GetFullPriceRenewalSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "security, scheme=true;type=oauth2;name=Authorization",
  })
  accountAuth: string;
}

export class GetFullPriceRenewalRequest extends SpeakeasyBase {
  /**
   * Language code for the preferred language to be returned in the response.
   *
   * @remarks
   *
   * Parameter value is case-insensitive and should be
   *   - a valid 2 letter language code without region such as en, de
   *   - or with region such as en_us, en_au
   *
   * If undefined then defaults to 'en', unless the server has been configured
   * with a custom default.
   *
   * See https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
   *
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}

export class GetFullPriceRenewalResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * full price renewal state and reason for specific user.
   */
  @SpeakeasyMetadata()
  itvSubscriptionFullPriceRenewal?: shared.ItvSubscriptionFullPriceRenewal;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
