/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class RemovePaymentMethodSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "security, scheme=true;type=oauth2;name=Authorization",
  })
  accountAuth: string;
}

export class RemovePaymentMethodRequest extends SpeakeasyBase {
  /**
   * The set of opt in feature flags which cause breaking changes to responses.
   *
   * @remarks
   *
   * While Rocket APIs look to avoid breaking changes under the active major version, the formats of responses
   * may need to evolve over this time.
   *
   * These feature flags allow clients to select which response formats they expect and avoid breaking
   * clients as these formats evolve under the current major version.
   *
   * ### Flags
   *
   * - `all` - Enable all flags. Useful for testing. _Don't use in production_.
   * - `idp` - Dynamic item detail pages with schedulable rows.
   * - `ldp` - Dynamic list detail pages with schedulable rows.
   * - `hb` - Hubble formatted image urls.
   * - `rpt` - Updated resume point threshold logic.
   * - `cas` - "Custom Asset Search", inlcude `customAssets` in search results.
   * - `lrl` - Do not pre-populate related list if more than `max_list_prefetch` down the page.
   * - `cd` - Custom Destination support.
   *
   * See the `feature-flags.md` for available flag details.
   *
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=ff" })
  ff?: shared.FeatureFlagsEnum[];

  /**
   * The id of the payment method to remove.
   */
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

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

export class RemovePaymentMethodResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * Bad request.
   */
  @SpeakeasyMetadata()
  serviceError?: shared.ServiceError;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
