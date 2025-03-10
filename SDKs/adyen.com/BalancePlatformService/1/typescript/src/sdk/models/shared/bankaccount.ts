/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * The bank account type.
 *
 * @remarks
 *
 * Possible values: **checking** only.
 */
export enum BankAccountAccountTypeEnum {
  Checking = "checking",
}

export class BankAccount extends SpeakeasyBase {
  /**
   * The bank account number, without separators or whitespace.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "accountNumber" })
  accountNumber?: string;

  /**
   * The bank account type.
   *
   * @remarks
   *
   * Possible values: **checking** only.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "accountType" })
  accountType?: BankAccountAccountTypeEnum;

  /**
   * The [International Bank Account Number](https://en.wikipedia.org/wiki/International_Bank_Account_Number) (IBAN).
   */
  @SpeakeasyMetadata()
  @Expose({ name: "iban" })
  iban: string;

  /**
   * The 9-digit [routing number](https://en.wikipedia.org/wiki/ABA_routing_transit_number), without separators or whitespace.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "routingNumber" })
  routingNumber?: string;
}
