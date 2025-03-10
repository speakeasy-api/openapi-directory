import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ContactsDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class ContactsDeleteQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=raw" })
  raw?: boolean;
}


export class ContactsDeleteHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=x-apideck-app-id" })
  xApideckAppId: string;

  @Metadata({ data: "header, style=simple;explode=false;name=x-apideck-consumer-id" })
  xApideckConsumerId: string;

  @Metadata({ data: "header, style=simple;explode=false;name=x-apideck-service-id" })
  xApideckServiceId?: string;
}


export class ContactsDeleteSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class ContactsDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ContactsDeletePathParams;

  @Metadata()
  queryParams: ContactsDeleteQueryParams;

  @Metadata()
  headers: ContactsDeleteHeaders;

  @Metadata()
  security: ContactsDeleteSecurity;
}


export class ContactsDeleteResponse extends SpeakeasyBase {
  @Metadata()
  badRequestResponse?: shared.BadRequestResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  deleteContactResponse?: shared.DeleteContactResponse;

  @Metadata()
  notFoundResponse?: shared.NotFoundResponse;

  @Metadata()
  paymentRequiredResponse?: shared.PaymentRequiredResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  unauthorizedResponse?: shared.UnauthorizedResponse;

  @Metadata()
  unexpectedErrorResponse?: shared.UnexpectedErrorResponse;

  @Metadata()
  unprocessableResponse?: shared.UnprocessableResponse;
}
