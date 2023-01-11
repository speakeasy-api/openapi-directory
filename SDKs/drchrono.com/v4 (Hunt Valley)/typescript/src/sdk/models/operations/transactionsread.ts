import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TransactionsReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class TransactionsReadQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=appointment" })
  appointment?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=doctor" })
  doctor?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=line_item" })
  lineItem?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=posted_date" })
  postedDate?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=since" })
  since?: string;
}


export class TransactionsReadSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  drchronoOauth2: shared.SchemeDrchronoOauth2;
}


export class TransactionsReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TransactionsReadPathParams;

  @SpeakeasyMetadata()
  queryParams: TransactionsReadQueryParams;

  @SpeakeasyMetadata()
  security: TransactionsReadSecurity;
}


export class TransactionsReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  lineItemTransaction?: shared.LineItemTransaction;

  @SpeakeasyMetadata()
  statusCode: number;
}
