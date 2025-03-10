/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class PutOrdersIdStatusSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "security, scheme=true;type=oauth2;name=Authorization",
  })
  fdcAuth: string;
}

export class PutOrdersIdStatusStatusTypeSimpleV2Status extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "code" })
  code: string;
}

/**
 * New status event
 */
export class PutOrdersIdStatusStatusTypeSimpleV2 extends SpeakeasyBase {
  /**
   * Human-readable description
   */
  @SpeakeasyMetadata()
  @Expose({ name: "reason" })
  reason: string;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  @Type(() => PutOrdersIdStatusStatusTypeSimpleV2Status)
  status: PutOrdersIdStatusStatusTypeSimpleV2Status;
}

export class PutOrdersIdStatusRequest extends SpeakeasyBase {
  /**
   * New status event
   */
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  requestBody: PutOrdersIdStatusStatusTypeSimpleV2;

  /**
   * The FDC order Id
   */
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}

export class PutOrdersIdStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * Order Found
   */
  @SpeakeasyMetadata()
  oneordersPostResponses201ContentApplication1jsonSchema?: shared.OneordersPostResponses201ContentApplication1jsonSchema;
}
