/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ValueHolder } from "./valueholder";
import { Expose, Type } from "class-transformer";

/**
 * Specifies a request to execute a statement.
 */
export class ExecuteStatementRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ValueHolder })
  @Expose({ name: "Parameters" })
  @Type(() => ValueHolder)
  parameters?: ValueHolder[];

  @SpeakeasyMetadata()
  @Expose({ name: "Statement" })
  statement: string;

  @SpeakeasyMetadata()
  @Expose({ name: "TransactionId" })
  transactionId: string;
}
