import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UploadFileQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=allowOverwrite" })
  allowOverwrite?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fileSize" })
  fileSize: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=path" })
  path: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=resume" })
  resume?: boolean;
}


export class UploadFileHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=ev-access-token" })
  evAccessToken: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=ev-api-key" })
  evApiKey: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=offsetBytes" })
  offsetBytes?: number;
}


export class UploadFileRequestBodyFile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @SpeakeasyMetadata({ data: "multipart_form, name=file" })
  file: string;
}


export class UploadFileRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  file?: UploadFileRequestBodyFile;
}


export class UploadFileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: UploadFileQueryParams;

  @SpeakeasyMetadata()
  headers: UploadFileHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request?: UploadFileRequestBody;
}


export class UploadFileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  resourceResponse?: shared.ResourceResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
