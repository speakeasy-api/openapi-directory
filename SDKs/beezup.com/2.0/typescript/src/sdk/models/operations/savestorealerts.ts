import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SaveStoreAlertsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=storeId" })
  storeId: string;
}


export class SaveStoreAlertsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SaveStoreAlertsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json", elemType: shared.SaveStoreAlertRequest })
  request: Record<string, shared.SaveStoreAlertRequest>;
}


export class SaveStoreAlertsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
