import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AutoScheduleAutoImportPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=storeId" })
  storeId: string;
}


export class AutoScheduleAutoImportRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AutoScheduleAutoImportPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ScheduleAutoImportRequest;
}


export class AutoScheduleAutoImportResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
