import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DownloadQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=downloadArchiveName" })
  downloadArchiveName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=resources[]" })
  resources: string[];
}


export class DownloadHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=ev-access-token" })
  evAccessToken: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=ev-api-key" })
  evApiKey: string;
}


export class DownloadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: DownloadQueryParams;

  @SpeakeasyMetadata()
  headers: DownloadHeaders;
}


export class DownloadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  download200ApplicationOctetStreamBinaryString?: Uint8Array;

  @SpeakeasyMetadata()
  download200ApplicationZipBinaryString?: Uint8Array;
}
