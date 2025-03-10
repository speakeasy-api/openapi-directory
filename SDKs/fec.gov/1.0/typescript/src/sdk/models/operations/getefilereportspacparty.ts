/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class GetEfileReportsPacPartyRequest extends SpeakeasyBase {
  /**
   *
   * @remarks
   * API key for https://api.data.gov. Get one at https://api.data.gov/signup.
   *
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=api_key",
  })
  apiKey: string;

  /**
   *
   * @remarks
   * A unique identifier assigned to each committee or filer registered with the FEC. In general committee id's begin with the letter C which is followed by eight digits.
   *
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=committee_id",
  })
  committeeId?: string[];

  /**
   * Filing ID number
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=file_number",
  })
  fileNumber?: number[];

  /**
   *
   * @remarks
   * Selects all filings received before this date(MM/DD/YYYY or YYYY-MM-DD)
   *
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=max_receipt_date;dateTimeFormat=YYYY-MM-DD",
  })
  maxReceiptDate?: Date;

  /**
   *
   * @remarks
   * Selects all filings received after this date(MM/DD/YYYY or YYYY-MM-DD)
   *
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=min_receipt_date;dateTimeFormat=YYYY-MM-DD",
  })
  minReceiptDate?: Date;

  /**
   * For paginating through results, starting at page 1
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  /**
   * The number of results returned per page. Defaults to 20.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=per_page",
  })
  perPage?: number;

  /**
   *
   * @remarks
   * Keyword search for filer name or ID
   *
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=q_filer",
  })
  qFiler?: string[];

  /**
   * Provide a field to sort by. Use `-` for descending order.
   *
   * @remarks
   *
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;

  /**
   * Hide null values on sorted column(s).
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=sort_hide_null",
  })
  sortHideNull?: boolean;

  /**
   * Toggle that filters out all rows having sort column that is non-null
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=sort_null_only",
  })
  sortNullOnly?: boolean;

  /**
   * Toggle that sorts null values last
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=sort_nulls_last",
  })
  sortNullsLast?: boolean;
}

export class GetEfileReportsPacPartyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  baseF3XFilingPage?: shared.BaseF3XFilingPage;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
