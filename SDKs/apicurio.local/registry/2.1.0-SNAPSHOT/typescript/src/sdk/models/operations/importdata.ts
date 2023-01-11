import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ImportDataRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/zip" })
  request: Uint8Array;
}


export class ImportDataResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  statusCode: number;
}
