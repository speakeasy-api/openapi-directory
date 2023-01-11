import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostMeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: Record<string, any>;
}


export class PostMeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
