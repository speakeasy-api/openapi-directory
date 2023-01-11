import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class FileDownloadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=file_id" })
  fileId: number;
}


export class FileDownloadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: FileDownloadPathParams;
}


export class FileDownloadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
