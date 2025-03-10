/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class HistoryListForFolderRequest extends SpeakeasyBase {
  /**
   * Used for pagination.  When a list request has more records available, cursors are provided in the response headers `X-Files-Cursor-Next` and `X-Files-Cursor-Prev`.  Send one of those cursor value here to resume an existing list from the next available record.  Note: many of our SDKs have iterator methods that will automatically handle cursor-based pagination.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=cursor",
  })
  cursor?: string;

  /**
   * Display format. Leave blank or set to `full` or `parent`.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=display",
  })
  display?: string;

  /**
   * Leave blank or set to a date/time to filter later entries.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=end_at;dateTimeFormat=YYYY-MM-DDThh:mm:ss.sssZ",
  })
  endAt?: Date;

  /**
   * Path to operate on.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=path",
  })
  path: string;

  /**
   * Number of records to show per page.  (Max: 10,000, 1,000 or less is recommended).
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=per_page",
  })
  perPage?: number;

  /**
   * If set, sort records by the specified field in either `asc` or `desc` direction (e.g. `sort_by[user_id]=desc`). Valid fields are `user_id` and `created_at`.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=sort_by",
  })
  sortBy?: Record<string, any>;

  /**
   * Leave blank or set to a date/time to filter earlier entries.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=start_at;dateTimeFormat=YYYY-MM-DDThh:mm:ss.sssZ",
  })
  startAt?: Date;
}

export class HistoryListForFolderResponse extends SpeakeasyBase {
  /**
   * A list of History objects.
   */
  @SpeakeasyMetadata({ elemType: shared.ActionEntity })
  actionEntities?: shared.ActionEntity[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
