/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export class Payrolls {
  _defaultClient: AxiosInstance;
  _securityClient: AxiosInstance;
  _serverURL: string;
  _language: string;
  _sdkVersion: string;
  _genVersion: string;

  constructor(
    defaultClient: AxiosInstance,
    securityClient: AxiosInstance,
    serverURL: string,
    language: string,
    sdkVersion: string,
    genVersion: string
  ) {
    this._defaultClient = defaultClient;
    this._securityClient = securityClient;
    this._serverURL = serverURL;
    this._language = language;
    this._sdkVersion = sdkVersion;
    this._genVersion = genVersion;
  }

  /**
   * List Payroll
   *
   * @remarks
   * List Payroll
   */
  payrollsAll(
    req: operations.PayrollsAllRequest,
    security: operations.PayrollsAllSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.PayrollsAllResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PayrollsAllRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/hris/payrolls";
    if (!(security instanceof utils.SpeakeasyBase)) {
      security = new operations.PayrollsAllSecurity(security);
    }
    const client: AxiosInstance = utils.createSecurityClient(
      this._defaultClient,
      security
    );

    const headers = { ...utils.getHeadersFromRequest(req), ...config?.headers };
    const queryParams: string = utils.serializeQueryParams(req);

    const r = client.request({
      url: url + queryParams,
      method: "get",
      headers: headers,
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.PayrollsAllResponse =
        new operations.PayrollsAllResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.getPayrollsResponse = utils.objectToClass(
              httpRes?.data,
              shared.GetPayrollsResponse
            );
          }
          break;
        case httpRes?.status == 400:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.badRequestResponse = utils.objectToClass(
              httpRes?.data,
              shared.BadRequestResponse
            );
          }
          break;
        case httpRes?.status == 401:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.unauthorizedResponse = utils.objectToClass(
              httpRes?.data,
              shared.UnauthorizedResponse
            );
          }
          break;
        case httpRes?.status == 402:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.paymentRequiredResponse = utils.objectToClass(
              httpRes?.data,
              shared.PaymentRequiredResponse
            );
          }
          break;
        case httpRes?.status == 404:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.notFoundResponse = utils.objectToClass(
              httpRes?.data,
              shared.NotFoundResponse
            );
          }
          break;
        case httpRes?.status == 422:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.unprocessableResponse = utils.objectToClass(
              httpRes?.data,
              shared.UnprocessableResponse
            );
          }
          break;
        default:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.unexpectedErrorResponse = utils.objectToClass(
              httpRes?.data,
              shared.UnexpectedErrorResponse
            );
          }
          break;
      }

      return res;
    });
  }

  /**
   * Get Payroll
   *
   * @remarks
   * Get Payroll
   */
  payrollsOne(
    req: operations.PayrollsOneRequest,
    security: operations.PayrollsOneSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.PayrollsOneResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PayrollsOneRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/hris/payrolls/{payroll_id}",
      req
    );
    if (!(security instanceof utils.SpeakeasyBase)) {
      security = new operations.PayrollsOneSecurity(security);
    }
    const client: AxiosInstance = utils.createSecurityClient(
      this._defaultClient,
      security
    );

    const headers = { ...utils.getHeadersFromRequest(req), ...config?.headers };
    const queryParams: string = utils.serializeQueryParams(req);

    const r = client.request({
      url: url + queryParams,
      method: "get",
      headers: headers,
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.PayrollsOneResponse =
        new operations.PayrollsOneResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.getPayrollResponse = utils.objectToClass(
              httpRes?.data,
              shared.GetPayrollResponse
            );
          }
          break;
        case httpRes?.status == 400:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.badRequestResponse = utils.objectToClass(
              httpRes?.data,
              shared.BadRequestResponse
            );
          }
          break;
        case httpRes?.status == 401:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.unauthorizedResponse = utils.objectToClass(
              httpRes?.data,
              shared.UnauthorizedResponse
            );
          }
          break;
        case httpRes?.status == 402:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.paymentRequiredResponse = utils.objectToClass(
              httpRes?.data,
              shared.PaymentRequiredResponse
            );
          }
          break;
        case httpRes?.status == 404:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.notFoundResponse = utils.objectToClass(
              httpRes?.data,
              shared.NotFoundResponse
            );
          }
          break;
        case httpRes?.status == 422:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.unprocessableResponse = utils.objectToClass(
              httpRes?.data,
              shared.UnprocessableResponse
            );
          }
          break;
        default:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.unexpectedErrorResponse = utils.objectToClass(
              httpRes?.data,
              shared.UnexpectedErrorResponse
            );
          }
          break;
      }

      return res;
    });
  }
}
