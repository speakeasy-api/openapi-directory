/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class CustomerGetAllRequest extends SpeakeasyBase {
  /**
   * The current page to request starting with 1
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  /**
   * The pagesize for the result list. Values between 1 and 250 are allowed
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=pageSize",
  })
  pageSize?: number;
}

export class CustomerGetAllResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  /**
   * OK
   */
  @SpeakeasyMetadata()
  rechnungsdruckWebAppControllersAPIAPIPagedResultSystemCollectionsGenericListBillbeeInterfacesBillbeeAPIModelCustomerAPIModel?: shared.RechnungsdruckWebAppControllersAPIAPIPagedResultSystemCollectionsGenericListBillbeeInterfacesBillbeeAPIModelCustomerAPIModel;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
