/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class MessagesListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "security, scheme=true;type=oauth2;name=Authorization",
  })
  drchronoOauth2: string;
}

export class MessagesListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=cursor",
  })
  cursor?: string;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=doctor",
  })
  doctor?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=owner" })
  owner?: number;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=page_size",
  })
  pageSize?: number;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=patient",
  })
  patient?: number;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=received_since",
  })
  receivedSince?: string;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=responsible_user",
  })
  responsibleUser?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: string;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=updated_since",
  })
  updatedSince?: string;
}

/**
 * Paginated Result
 */
export class MessagesList200ApplicationJSON extends SpeakeasyBase {
  /**
   * result data
   */
  @SpeakeasyMetadata({ elemType: shared.DoctorMessage })
  @Expose({ name: "data" })
  @Type(() => shared.DoctorMessage)
  data?: shared.DoctorMessage[];

  /**
   * Next Paginated page
   */
  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  next?: string;

  /**
   * Previous paginated page
   */
  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  previous?: string;
}

export class MessagesListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * OK
   */
  @SpeakeasyMetadata()
  messagesList200ApplicationJSONObject?: MessagesList200ApplicationJSON;
}
