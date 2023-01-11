import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum ExportFmtEnum {
    Kml = "kml",
    Kmzppa = "kmzppa",
    Shp = "shp",
    Tiff = "tiff"
}


export class ExportQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=file" })
  file: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fmt" })
  fmt: ExportFmtEnum;
}


export class ExportSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class ExportRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ExportQueryParams;

  @SpeakeasyMetadata()
  security: ExportSecurity;
}


export class ExportResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
