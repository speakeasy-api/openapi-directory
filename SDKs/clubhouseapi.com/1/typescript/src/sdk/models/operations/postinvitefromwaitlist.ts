import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostInviteFromWaitlistRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: Record<string, any>;
}


export class PostInviteFromWaitlistResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
