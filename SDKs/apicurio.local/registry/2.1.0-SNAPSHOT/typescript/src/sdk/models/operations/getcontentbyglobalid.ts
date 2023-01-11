import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetContentByGlobalIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=globalId" })
  globalId: number;
}


export class GetContentByGlobalIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetContentByGlobalIdPathParams;
}


export class GetContentByGlobalIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  fileContent?: Uint8Array;

  @SpeakeasyMetadata()
  statusCode: number;
}
