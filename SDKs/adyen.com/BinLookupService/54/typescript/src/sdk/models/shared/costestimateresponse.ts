/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Amount } from "./amount";
import { CardBin } from "./cardbin";
import { Expose, Type } from "class-transformer";

/**
 * OK - the request has succeeded.
 */
export class CostEstimateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "cardBin" })
  @Type(() => CardBin)
  cardBin?: CardBin;

  @SpeakeasyMetadata()
  @Expose({ name: "costEstimateAmount" })
  @Type(() => Amount)
  costEstimateAmount?: Amount;

  /**
   * Adyen's 16-character reference associated with the request.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "costEstimateReference" })
  costEstimateReference?: string;

  /**
   * The result of the cost estimation.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "resultCode" })
  resultCode?: string;

  /**
   * Indicates the way the charges can be passed on to the cardholder. The following values are possible:
   *
   * @remarks
   * * `ZERO` - the charges are not allowed to pass on
   * * `PASSTHROUGH` - the charges can be passed on
   * * `UNLIMITED` - there is no limit on how much surcharge is passed on
   */
  @SpeakeasyMetadata()
  @Expose({ name: "surchargeType" })
  surchargeType?: string;
}
