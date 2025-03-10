/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AccountHolderDetails } from "./accountholderdetails";
import { Expose, Type } from "class-transformer";

/**
 * The legal entity type of the account holder. This determines the information that should be provided in the request.
 *
 * @remarks
 *
 * Possible values: **Business**, **Individual**, or **NonProfit**.
 *
 * * If set to **Business** or **NonProfit**, then `accountHolderDetails.businessDetails` must be provided, with at least one entry in the `accountHolderDetails.businessDetails.shareholders` list.
 *
 * * If set to **Individual**, then `accountHolderDetails.individualDetails` must be provided.
 */
export enum CreateAccountHolderRequestLegalEntityEnum {
  Business = "Business",
  Individual = "Individual",
  NonProfit = "NonProfit",
}

export class CreateAccountHolderRequest extends SpeakeasyBase {
  /**
   * Your unique identifier for the prospective account holder.
   *
   * @remarks
   * The length must be between three (3) and fifty (50) characters long. Only letters, digits, and hyphens (-) are allowed.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "accountHolderCode" })
  accountHolderCode: string;

  @SpeakeasyMetadata()
  @Expose({ name: "accountHolderDetails" })
  @Type(() => AccountHolderDetails)
  accountHolderDetails: AccountHolderDetails;

  /**
   * If set to **true**, an account with the default options is automatically created for the account holder.
   *
   * @remarks
   * By default, this field is set to **true**.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "createDefaultAccount" })
  createDefaultAccount?: boolean;

  /**
   * A description of the prospective account holder, maximum 256 characters. You can use alphanumeric characters (A-Z, a-z, 0-9), white spaces, and underscores `_`.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  /**
   * The legal entity type of the account holder. This determines the information that should be provided in the request.
   *
   * @remarks
   *
   * Possible values: **Business**, **Individual**, or **NonProfit**.
   *
   * * If set to **Business** or **NonProfit**, then `accountHolderDetails.businessDetails` must be provided, with at least one entry in the `accountHolderDetails.businessDetails.shareholders` list.
   *
   * * If set to **Individual**, then `accountHolderDetails.individualDetails` must be provided.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "legalEntity" })
  legalEntity: CreateAccountHolderRequestLegalEntityEnum;

  /**
   * The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes), with which the prospective account holder primarily deals.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "primaryCurrency" })
  primaryCurrency?: string;

  /**
   * The starting [processing tier](https://docs.adyen.com/marketplaces-and-platforms/classic/onboarding-and-verification/precheck-kyc-information) for the prospective account holder.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "processingTier" })
  processingTier?: number;
}
