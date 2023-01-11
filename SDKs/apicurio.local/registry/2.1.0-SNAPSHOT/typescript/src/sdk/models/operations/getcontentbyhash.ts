import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetContentByHashPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=contentHash" })
  contentHash: string;
}


export class GetContentByHashRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetContentByHashPathParams;
}


export class GetContentByHashResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  fileContent?: Uint8Array;

  @SpeakeasyMetadata()
  statusCode: number;
}
