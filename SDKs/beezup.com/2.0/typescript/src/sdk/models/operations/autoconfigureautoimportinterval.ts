import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AutoConfigureAutoImportIntervalPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=storeId" })
  storeId: string;
}


export class AutoConfigureAutoImportIntervalRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AutoConfigureAutoImportIntervalPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ConfigureAutoImportIntervalRequest;
}


export class AutoConfigureAutoImportIntervalResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
