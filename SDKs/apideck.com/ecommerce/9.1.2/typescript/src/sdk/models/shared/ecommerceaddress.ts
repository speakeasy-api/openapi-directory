/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * An object representing a shipping or billing address.
 */
export class EcommerceAddress extends SpeakeasyBase {
  /**
   * City of the billing address.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "city" })
  city?: string;

  /**
   * Company name of the customer
   */
  @SpeakeasyMetadata()
  @Expose({ name: "company_name" })
  companyName?: string;

  /**
   * Country of the billing address.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "country" })
  country?: string;

  /**
   * Address line 1 of the billing address.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "line1" })
  line1?: string;

  /**
   * Address line 2 of the billing address.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "line2" })
  line2?: string;

  /**
   * Postal/ZIP code of the billing address.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "postal_code" })
  postalCode?: string;

  /**
   * State/province of the billing address.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "state" })
  state?: string;
}
