/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { EFTBankDto } from "./eftbankdto";
import { Expose, Type } from "class-transformer";

export class SupplierQueryDto extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountName" })
  accountName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "accountNumber" })
  accountNumber?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "additionalEmails" })
  additionalEmails?: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "address" })
  address?: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "authCode" })
  authCode?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "bank" })
  @Type(() => EFTBankDto)
  bank?: EFTBankDto;

  @SpeakeasyMetadata()
  @Expose({ name: "businessIdentifierCode" })
  businessIdentifierCode?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "code" })
  code?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "contact" })
  contact?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "eFTReference" })
  eFTReference?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "email" })
  email?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "fax" })
  fax?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "internationalBankAccountNumber" })
  internationalBankAccountNumber?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "mobile" })
  mobile?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "ourCode" })
  ourCode?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "ownerTypeId" })
  ownerTypeId?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "phone" })
  phone?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "postponedAccounting" })
  postponedAccounting?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "timestamp" })
  timestamp?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "vatAnalysisTypeId" })
  vatAnalysisTypeId?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "vatReg" })
  vatReg?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "vatType" })
  vatType?: number;
}
