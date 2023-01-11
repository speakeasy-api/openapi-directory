import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListDocumentQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=block_id" })
  blockId?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end_date" })
  endDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end_number" })
  endNumber?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end_year" })
  endYear?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=partner_id" })
  partnerId?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=payment_method" })
  paymentMethod?: shared.PaymentMethodEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=payment_status" })
  paymentStatus?: shared.PaymentStatusEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start_date" })
  startDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start_number" })
  startNumber?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start_year" })
  startYear?: number;
}


export class ListDocumentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListDocumentQueryParams;
}


export class ListDocumentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clientErrorResponse?: shared.ClientErrorResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  documentList?: shared.DocumentList;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  serverErrorResponse?: shared.ServerErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  validationErrorResponse?: shared.ValidationErrorResponse;
}
