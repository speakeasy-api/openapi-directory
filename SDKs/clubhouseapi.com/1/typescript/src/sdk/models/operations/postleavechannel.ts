import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostLeaveChannelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: Record<string, any>;
}


export class PostLeaveChannelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
