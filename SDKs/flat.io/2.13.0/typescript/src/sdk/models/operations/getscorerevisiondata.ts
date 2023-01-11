import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetScoreRevisionDataFormatEnum {
    Json = "json",
    Mxl = "mxl",
    Xml = "xml",
    Mp3 = "mp3",
    Wav = "wav",
    Midi = "midi",
    ThumbnailPng = "thumbnail.png",
    SynchronizationPoints = "synchronizationPoints"
}


export class GetScoreRevisionDataPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: GetScoreRevisionDataFormatEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=revision" })
  revision: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=score" })
  score: string;
}


export class GetScoreRevisionDataQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=onlyCached" })
  onlyCached?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parts" })
  parts?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sharingKey" })
  sharingKey?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=url" })
  url?: boolean;
}


export class GetScoreRevisionDataSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetScoreRevisionDataRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetScoreRevisionDataPathParams;

  @SpeakeasyMetadata()
  queryParams: GetScoreRevisionDataQueryParams;

  @SpeakeasyMetadata()
  security: GetScoreRevisionDataSecurity;
}


export class GetScoreRevisionDataResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  flatErrorResponse?: shared.FlatErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getScoreRevisionData200ApplicationJSONBinaryString?: Uint8Array;

  @SpeakeasyMetadata()
  getScoreRevisionData200ApplicationVndRecordareMusicxmlPlusXmlBinaryString?: Uint8Array;

  @SpeakeasyMetadata()
  getScoreRevisionData200ApplicationVndRecordareMusicxmlBinaryString?: Uint8Array;

  @SpeakeasyMetadata()
  getScoreRevisionData200AudioMidiBinaryString?: Uint8Array;

  @SpeakeasyMetadata()
  getScoreRevisionData200AudioMp3BinaryString?: Uint8Array;

  @SpeakeasyMetadata()
  getScoreRevisionData200AudioWavBinaryString?: Uint8Array;

  @SpeakeasyMetadata()
  getScoreRevisionData200ImagePngBinaryString?: Uint8Array;
}
