import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class FeeSchedulesReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class FeeSchedulesReadQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=code_type" })
  codeType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=doctor" })
  doctor?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=payer_id" })
  payerId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=since" })
  since?: string;
}


export class FeeSchedulesReadSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  drchronoOauth2: shared.SchemeDrchronoOauth2;
}


export class FeeSchedulesReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: FeeSchedulesReadPathParams;

  @SpeakeasyMetadata()
  queryParams: FeeSchedulesReadQueryParams;

  @SpeakeasyMetadata()
  security: FeeSchedulesReadSecurity;
}


export class FeeSchedulesReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  doctorFeeSchedule?: shared.DoctorFeeSchedule;

  @SpeakeasyMetadata()
  statusCode: number;
}
