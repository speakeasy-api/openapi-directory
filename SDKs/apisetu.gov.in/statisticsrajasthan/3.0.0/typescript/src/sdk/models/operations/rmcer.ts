/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class RmcerSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "security, scheme=true;type=apiKey;subtype=header;name=X-APISETU-APIKEY",
  })
  apiKey: string;

  @SpeakeasyMetadata({
    data: "security, scheme=true;type=apiKey;subtype=header;name=X-APISETU-CLIENTID",
  })
  clientId: string;
}

export class RmcerRequestBodyCertificateParameters extends SpeakeasyBase {
  /**
   * Date of Marriage
   */
  @SpeakeasyMetadata()
  @Expose({ name: "DateofEvent" })
  dateofEvent: string;

  /**
   * Registration No.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "RegisNumber" })
  regisNumber: string;

  /**
   * Year of Registration
   */
  @SpeakeasyMetadata()
  @Expose({ name: "Year" })
  year: string;
}

/**
 * The format of the certificate in response.
 */
export enum RmcerRequestBodyFormatEnum {
  Pdf = "pdf",
}

/**
 * Request format
 */
export class RmcerRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "certificateParameters" })
  @Type(() => RmcerRequestBodyCertificateParameters)
  certificateParameters?: RmcerRequestBodyCertificateParameters;

  @SpeakeasyMetadata()
  @Expose({ name: "consentArtifact" })
  @Type(() => shared.ConsentArtifactSchema)
  consentArtifact?: shared.ConsentArtifactSchema;

  /**
   * The format of the certificate in response.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "format" })
  format: RmcerRequestBodyFormatEnum;

  /**
   * A unique transaction id for this request in UUID format. It is used for tracking the request.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "txnId" })
  txnId: string;
}

export enum Rmcer504ApplicationJSONErrorEnum {
  GatewayTimeout = "gateway_timeout",
}

export enum Rmcer504ApplicationJSONErrorDescriptionEnum {
  PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time",
}

/**
 * Gateway timeout
 */
export class Rmcer504ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "error" })
  error?: Rmcer504ApplicationJSONErrorEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "errorDescription" })
  errorDescription?: Rmcer504ApplicationJSONErrorDescriptionEnum;
}

export enum Rmcer503ApplicationJSONErrorEnum {
  ServiceUnavailable = "service_unavailable",
}

export enum Rmcer503ApplicationJSONErrorDescriptionEnum {
  PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable",
}

/**
 * Service unavailable
 */
export class Rmcer503ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "error" })
  error?: Rmcer503ApplicationJSONErrorEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "errorDescription" })
  errorDescription?: Rmcer503ApplicationJSONErrorDescriptionEnum;
}

export enum Rmcer502ApplicationJSONErrorEnum {
  BadGatewy = "bad_gatewy",
}

export enum Rmcer502ApplicationJSONErrorDescriptionEnum {
  PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response",
}

/**
 * Bad gateway
 */
export class Rmcer502ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "error" })
  error?: Rmcer502ApplicationJSONErrorEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "errorDescription" })
  errorDescription?: Rmcer502ApplicationJSONErrorDescriptionEnum;
}

export enum Rmcer500ApplicationJSONErrorEnum {
  InternalServerError = "internal_server_error",
}

export enum Rmcer500ApplicationJSONErrorDescriptionEnum {
  InternalServerError = "Internal server error",
}

/**
 * Internal server error
 */
export class Rmcer500ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "error" })
  error?: Rmcer500ApplicationJSONErrorEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "errorDescription" })
  errorDescription?: Rmcer500ApplicationJSONErrorDescriptionEnum;
}

export enum Rmcer404ApplicationJSONErrorEnum {
  RecordNotFound = "record_not_found",
  UrlNotFound = "url_not_found",
}

export enum Rmcer404ApplicationJSONErrorDescriptionEnum {
  NoRecordFound = "No record found",
  YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect",
}

/**
 * No record found
 */
export class Rmcer404ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "error" })
  error?: Rmcer404ApplicationJSONErrorEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "errorDescription" })
  errorDescription?: Rmcer404ApplicationJSONErrorDescriptionEnum;
}

export enum Rmcer401ApplicationJSONErrorEnum {
  InvalidAuthentication = "invalid_authentication",
  InvalidAuthorization = "invalid_authorization",
}

export enum Rmcer401ApplicationJSONErrorDescriptionEnum {
  AuthenticationFailed = "Authentication failed",
  YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API",
}

/**
 * Unauthorized access
 */
export class Rmcer401ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "error" })
  error?: Rmcer401ApplicationJSONErrorEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "errorDescription" })
  errorDescription?: Rmcer401ApplicationJSONErrorDescriptionEnum;
}

export enum Rmcer400ApplicationJSONErrorEnum {
  MissingParameter = "missing_parameter",
  InvalidParameter = "invalid_parameter",
  InvalidFormat = "invalid_format",
  InvalidTxnid = "invalid_txnid",
  InvalidConsentid = "invalid_consentid",
}

export enum Rmcer400ApplicationJSONErrorDescriptionEnum {
  PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
  BadRequest = "Bad request",
  TheFormatParameterIsInvalid = "The format parameter is invalid",
  TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
  TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format",
}

/**
 * Bad request
 */
export class Rmcer400ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "error" })
  error?: Rmcer400ApplicationJSONErrorEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "errorDescription" })
  errorDescription?: Rmcer400ApplicationJSONErrorDescriptionEnum;
}

export class RmcerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * Bad request
   */
  @SpeakeasyMetadata()
  rmcer400ApplicationJSONObject?: Rmcer400ApplicationJSON;

  /**
   * Unauthorized access
   */
  @SpeakeasyMetadata()
  rmcer401ApplicationJSONObject?: Rmcer401ApplicationJSON;

  /**
   * No record found
   */
  @SpeakeasyMetadata()
  rmcer404ApplicationJSONObject?: Rmcer404ApplicationJSON;

  /**
   * Internal server error
   */
  @SpeakeasyMetadata()
  rmcer500ApplicationJSONObject?: Rmcer500ApplicationJSON;

  /**
   * Bad gateway
   */
  @SpeakeasyMetadata()
  rmcer502ApplicationJSONObject?: Rmcer502ApplicationJSON;

  /**
   * Service unavailable
   */
  @SpeakeasyMetadata()
  rmcer503ApplicationJSONObject?: Rmcer503ApplicationJSON;

  /**
   * Gateway timeout
   */
  @SpeakeasyMetadata()
  rmcer504ApplicationJSONObject?: Rmcer504ApplicationJSON;
}
