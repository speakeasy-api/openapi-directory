import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostUserHerokuKey403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PostUserHerokuKeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  postUserHerokuKey403ApplicationJSONObject?: PostUserHerokuKey403ApplicationJson;
}
