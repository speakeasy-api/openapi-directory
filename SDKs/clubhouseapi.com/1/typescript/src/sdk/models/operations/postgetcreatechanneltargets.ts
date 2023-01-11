import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostGetCreateChannelTargetsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: Record<string, any>;
}


export class PostGetCreateChannelTargetsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
