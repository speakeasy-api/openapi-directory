/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class ErrorsGroupErrorStackTraceSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "security, scheme=true;type=apiKey;subtype=header;name=X-API-Token",
  })
  apiToken: string;
}

export class ErrorsGroupErrorStackTraceRequest extends SpeakeasyBase {
  /**
   * The name of the application
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=app_name",
  })
  appName: string;

  /**
   * The id of the error group
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=errorGroupId",
  })
  errorGroupId: string;

  /**
   * The name of the owner
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=owner_name",
  })
  ownerName: string;
}

export enum ErrorsGroupErrorStackTraceDefaultApplicationJSONErrorCodeEnum {
  BadRequest = "BadRequest",
  Conflict = "Conflict",
  NotAcceptable = "NotAcceptable",
  NotFound = "NotFound",
  InternalServerError = "InternalServerError",
  Unauthorized = "Unauthorized",
  TooManyRequests = "TooManyRequests",
}

export class ErrorsGroupErrorStackTraceDefaultApplicationJSONError extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "code" })
  code: ErrorsGroupErrorStackTraceDefaultApplicationJSONErrorCodeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message: string;
}

/**
 * Error code with reason
 */
export class ErrorsGroupErrorStackTraceDefaultApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "error" })
  @Type(() => ErrorsGroupErrorStackTraceDefaultApplicationJSONError)
  error: ErrorsGroupErrorStackTraceDefaultApplicationJSONError;
}

export class ErrorsGroupErrorStackTraceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * Gets the stack trace for the error group.
   */
  @SpeakeasyMetadata()
  diagnosticsStackTrace?: shared.DiagnosticsStackTrace;

  /**
   * Error code with reason
   */
  @SpeakeasyMetadata()
  errorsGroupErrorStackTraceDefaultApplicationJSONObject?: ErrorsGroupErrorStackTraceDefaultApplicationJSON;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
