import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ImportationGetManualUpdateLastInputConfigPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=storeId" })
  storeId: string;
}


export class ImportationGetManualUpdateLastInputConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ImportationGetManualUpdateLastInputConfigPathParams;
}


export class ImportationGetManualUpdateLastInputConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  lastManualImportInputConfiguration?: shared.LastManualImportInputConfiguration;
}
