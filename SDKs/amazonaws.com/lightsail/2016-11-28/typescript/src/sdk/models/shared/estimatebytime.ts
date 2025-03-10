/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CurrencyEnum } from "./currencyenum";
import { PricingUnitEnum } from "./pricingunitenum";
import { TimePeriod } from "./timeperiod";
import { Expose, Type } from "class-transformer";

/**
 * An estimate that's associated with a time period.
 */
export class EstimateByTime extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "currency" })
  currency?: CurrencyEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "pricingUnit" })
  pricingUnit?: PricingUnitEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "timePeriod" })
  @Type(() => TimePeriod)
  timePeriod?: TimePeriod;

  @SpeakeasyMetadata()
  @Expose({ name: "unit" })
  unit?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "usageCost" })
  usageCost?: number;
}
