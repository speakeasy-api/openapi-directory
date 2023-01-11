import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class InsurancesReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class InsurancesReadQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=payer_type" })
  payerType: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=term" })
  term?: string;
}


export class InsurancesReadSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  drchronoOauth2: shared.SchemeDrchronoOauth2;
}


export class InsurancesReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: InsurancesReadPathParams;

  @SpeakeasyMetadata()
  queryParams: InsurancesReadQueryParams;

  @SpeakeasyMetadata()
  security: InsurancesReadSecurity;
}


export class InsurancesReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  insurance?: shared.Insurance;

  @SpeakeasyMetadata()
  statusCode: number;
}
