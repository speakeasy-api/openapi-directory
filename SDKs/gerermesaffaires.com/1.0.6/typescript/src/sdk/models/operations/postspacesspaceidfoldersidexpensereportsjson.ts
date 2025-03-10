/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class PostSpacesSpaceIdFoldersIdExpenseReportsJsonSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "security, scheme=true;type=oauth2;name=Authorization",
  })
  gmaAuth: string;
}

export enum PostSpacesSpaceIdFoldersIdExpenseReportsApplicationJson2AccountingWorkbookEnum {
  Customer = "customer",
  Provider = "provider",
  Bank = "bank",
  CashWoucher = "cashWoucher",
  Fiscal = "fiscal",
  Insurance = "insurance",
  Social = "social",
  Other = "other",
  Permanent = "permanent",
}

export class PostSpacesSpaceIdFoldersIdExpenseReportsApplicationJson2Accounting extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "AccountedOn" })
  accountedOn?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "Workbook" })
  workbook?: PostSpacesSpaceIdFoldersIdExpenseReportsApplicationJson2AccountingWorkbookEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "YearMonth" })
  yearMonth?: string;
}

export class PostSpacesSpaceIdFoldersIdExpenseReportsApplicationJson2File extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "Content64Encoded" })
  content64Encoded?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "Name" })
  name?: string;
}

export class PostSpacesSpaceIdFoldersIdExpenseReportsApplicationJson2 extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "Accounting" })
  @Type(
    () => PostSpacesSpaceIdFoldersIdExpenseReportsApplicationJson2Accounting
  )
  accounting?: PostSpacesSpaceIdFoldersIdExpenseReportsApplicationJson2Accounting;

  @SpeakeasyMetadata()
  @Expose({ name: "Author" })
  author?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "BeforeVAT" })
  beforeVAT?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "Code" })
  code?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "Comment" })
  comment?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "Date" })
  date?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "ExpenseDate" })
  expenseDate?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "File" })
  @Type(() => PostSpacesSpaceIdFoldersIdExpenseReportsApplicationJson2File)
  file: PostSpacesSpaceIdFoldersIdExpenseReportsApplicationJson2File;

  @SpeakeasyMetadata()
  @Expose({ name: "InclVAT" })
  inclVAT?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "ProcessingDate" })
  processingDate?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "Title" })
  title: string;

  @SpeakeasyMetadata()
  @Expose({ name: "VAT" })
  vat?: number;
}

export class PostSpacesSpaceIdFoldersIdExpenseReportsApplicationJson1 extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "BeforeVAT" })
  beforeVAT?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "Date" })
  date?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "DocumentId" })
  documentId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "ExpenseDate" })
  expenseDate?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "InclVAT" })
  inclVAT?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "ProcessingDate" })
  processingDate?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "VAT" })
  vat?: number;
}

export class PostSpacesSpaceIdFoldersIdExpenseReportsJsonRequest extends SpeakeasyBase {
  /**
   * expense proof to add (either DocumentId, ExpenseDate either (File,Name,Content64Encoded,Title,ExpenseDate) is mandatory)
   */
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  requestBody: any;

  /**
   * Id of the folder
   */
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  /**
   * Id of the space
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=spaceId",
  })
  spaceId: string;
}

/**
 * Id of expense report created
 */
export class PostSpacesSpaceIdFoldersIdExpenseReportsJson201ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "Id" })
  id?: string;
}

export class PostSpacesSpaceIdFoldersIdExpenseReportsJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers?: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * Id of expense report created
   */
  @SpeakeasyMetadata()
  postSpacesSpaceIdFoldersIdExpenseReportsJSON201ApplicationJSONObject?: PostSpacesSpaceIdFoldersIdExpenseReportsJson201ApplicationJSON;
}
