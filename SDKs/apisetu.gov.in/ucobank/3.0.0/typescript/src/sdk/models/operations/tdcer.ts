/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class TdcerSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "security, scheme=true;type=apiKey;subtype=header;name=X-APISETU-APIKEY",
  })
  apiKey: string;

  @SpeakeasyMetadata({
    data: "security, scheme=true;type=apiKey;subtype=header;name=X-APISETU-CLIENTID",
  })
  clientId: string;
}

export class TdcerRequestBodyCertificateParameters extends SpeakeasyBase {
  /**
   * Account Number
   */
  @SpeakeasyMetadata()
  @Expose({ name: "CustID" })
  custID: string;

  /**
   * Date of birth in DD-MM-YYYY format
   */
  @SpeakeasyMetadata()
  @Expose({ name: "DOB" })
  dob: string;

  /**
   * Financial Year
   */
  @SpeakeasyMetadata()
  @Expose({ name: "finYr" })
  finYr: string;
}

/**
 * The format of the certificate in response.
 */
export enum TdcerRequestBodyFormatEnum {
  Pdf = "pdf",
}

/**
 * Request format
 */
export class TdcerRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "certificateParameters" })
  @Type(() => TdcerRequestBodyCertificateParameters)
  certificateParameters?: TdcerRequestBodyCertificateParameters;

  @SpeakeasyMetadata()
  @Expose({ name: "consentArtifact" })
  @Type(() => shared.ConsentArtifactSchema)
  consentArtifact?: shared.ConsentArtifactSchema;

  /**
   * The format of the certificate in response.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "format" })
  format: TdcerRequestBodyFormatEnum;

  /**
   * A unique transaction id for this request in UUID format. It is used for tracking the request.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "txnId" })
  txnId: string;
}

export enum Tdcer504ApplicationJSONErrorEnum {
  GatewayTimeout = "gateway_timeout",
}

export enum Tdcer504ApplicationJSONErrorDescriptionEnum {
  PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time",
}

/**
 * Gateway timeout
 */
export class Tdcer504ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "error" })
  error?: Tdcer504ApplicationJSONErrorEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "errorDescription" })
  errorDescription?: Tdcer504ApplicationJSONErrorDescriptionEnum;
}

export enum Tdcer503ApplicationJSONErrorEnum {
  ServiceUnavailable = "service_unavailable",
}

export enum Tdcer503ApplicationJSONErrorDescriptionEnum {
  PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable",
}

/**
 * Service unavailable
 */
export class Tdcer503ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "error" })
  error?: Tdcer503ApplicationJSONErrorEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "errorDescription" })
  errorDescription?: Tdcer503ApplicationJSONErrorDescriptionEnum;
}

export enum Tdcer502ApplicationJSONErrorEnum {
  BadGatewy = "bad_gatewy",
}

export enum Tdcer502ApplicationJSONErrorDescriptionEnum {
  PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response",
}

/**
 * Bad gateway
 */
export class Tdcer502ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "error" })
  error?: Tdcer502ApplicationJSONErrorEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "errorDescription" })
  errorDescription?: Tdcer502ApplicationJSONErrorDescriptionEnum;
}

export enum Tdcer500ApplicationJSONErrorEnum {
  InternalServerError = "internal_server_error",
}

export enum Tdcer500ApplicationJSONErrorDescriptionEnum {
  InternalServerError = "Internal server error",
}

/**
 * Internal server error
 */
export class Tdcer500ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "error" })
  error?: Tdcer500ApplicationJSONErrorEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "errorDescription" })
  errorDescription?: Tdcer500ApplicationJSONErrorDescriptionEnum;
}

export enum Tdcer404ApplicationJSONErrorEnum {
  RecordNotFound = "record_not_found",
  UrlNotFound = "url_not_found",
}

export enum Tdcer404ApplicationJSONErrorDescriptionEnum {
  NoRecordFound = "No record found",
  YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect",
}

/**
 * No record found
 */
export class Tdcer404ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "error" })
  error?: Tdcer404ApplicationJSONErrorEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "errorDescription" })
  errorDescription?: Tdcer404ApplicationJSONErrorDescriptionEnum;
}

export enum Tdcer401ApplicationJSONErrorEnum {
  InvalidAuthentication = "invalid_authentication",
  InvalidAuthorization = "invalid_authorization",
}

export enum Tdcer401ApplicationJSONErrorDescriptionEnum {
  AuthenticationFailed = "Authentication failed",
  YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API",
}

/**
 * Unauthorized access
 */
export class Tdcer401ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "error" })
  error?: Tdcer401ApplicationJSONErrorEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "errorDescription" })
  errorDescription?: Tdcer401ApplicationJSONErrorDescriptionEnum;
}

export enum Tdcer400ApplicationJSONErrorEnum {
  MissingParameter = "missing_parameter",
  InvalidParameter = "invalid_parameter",
  InvalidFormat = "invalid_format",
  InvalidTxnid = "invalid_txnid",
  InvalidConsentid = "invalid_consentid",
}

export enum Tdcer400ApplicationJSONErrorDescriptionEnum {
  PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
  BadRequest = "Bad request",
  TheFormatParameterIsInvalid = "The format parameter is invalid",
  TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
  TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format",
}

/**
 * Bad request
 */
export class Tdcer400ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "error" })
  error?: Tdcer400ApplicationJSONErrorEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "errorDescription" })
  errorDescription?: Tdcer400ApplicationJSONErrorDescriptionEnum;
}

export class TdcerResponse extends SpeakeasyBase {
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
  tdcer400ApplicationJSONObject?: Tdcer400ApplicationJSON;

  /**
   * Unauthorized access
   */
  @SpeakeasyMetadata()
  tdcer401ApplicationJSONObject?: Tdcer401ApplicationJSON;

  /**
   * No record found
   */
  @SpeakeasyMetadata()
  tdcer404ApplicationJSONObject?: Tdcer404ApplicationJSON;

  /**
   * Internal server error
   */
  @SpeakeasyMetadata()
  tdcer500ApplicationJSONObject?: Tdcer500ApplicationJSON;

  /**
   * Bad gateway
   */
  @SpeakeasyMetadata()
  tdcer502ApplicationJSONObject?: Tdcer502ApplicationJSON;

  /**
   * Service unavailable
   */
  @SpeakeasyMetadata()
  tdcer503ApplicationJSONObject?: Tdcer503ApplicationJSON;

  /**
   * Gateway timeout
   */
  @SpeakeasyMetadata()
  tdcer504ApplicationJSONObject?: Tdcer504ApplicationJSON;
}
