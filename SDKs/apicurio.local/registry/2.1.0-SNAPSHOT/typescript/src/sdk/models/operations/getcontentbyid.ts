import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetContentByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=contentId" })
  contentId: number;
}


export class GetContentByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetContentByIdPathParams;
}


export class GetContentByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  fileContent?: Uint8Array;

  @SpeakeasyMetadata()
  statusCode: number;
}
