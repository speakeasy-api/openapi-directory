import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CustomDemographicsCreateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=doctor" })
  doctor?: number;
}


export class CustomDemographicsCreateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  drchronoOauth2: shared.SchemeDrchronoOauth2;
}


export class CustomDemographicsCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: CustomDemographicsCreateQueryParams;

  @SpeakeasyMetadata()
  security: CustomDemographicsCreateSecurity;
}


export class CustomDemographicsCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  customPatientFieldType?: shared.CustomPatientFieldType;

  @SpeakeasyMetadata()
  statusCode: number;
}
