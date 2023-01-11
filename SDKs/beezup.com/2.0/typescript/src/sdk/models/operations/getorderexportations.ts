import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetOrderExportationsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageNumber" })
  pageNumber: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=storeId" })
  storeId: string;
}


export class GetOrderExportationsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-None-Match" })
  ifNoneMatch?: string;
}


export class GetOrderExportationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetOrderExportationsQueryParams;

  @SpeakeasyMetadata()
  headers: GetOrderExportationsHeaders;
}


export class GetOrderExportationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  orderExportations?: shared.OrderExportations;
}
