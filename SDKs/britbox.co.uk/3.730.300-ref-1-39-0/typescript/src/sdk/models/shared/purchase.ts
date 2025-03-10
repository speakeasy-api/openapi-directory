/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ItemPurchase } from "./itempurchase";
import { PlanPurchase } from "./planpurchase";
import { Expose, Transform, Type } from "class-transformer";

export class Purchase extends SpeakeasyBase {
  /**
   * The date the purchase was authorized.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "authorizationDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  authorizationDate?: Date;

  /**
   * The date the purchase was created.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "creationDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  creationDate: Date;

  /**
   * The currency code used to make the purchase.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "currency" })
  currency: string;

  /**
   * The identifier of the purchase.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "item" })
  @Type(() => ItemPurchase)
  item?: ItemPurchase;

  /**
   * The identifier of the payment method used to make the purchase.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "paymentMethodId" })
  paymentMethodId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "plan" })
  @Type(() => PlanPurchase)
  plan?: PlanPurchase;

  /**
   * The total cost of the purchase.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "total" })
  total: number;
}
