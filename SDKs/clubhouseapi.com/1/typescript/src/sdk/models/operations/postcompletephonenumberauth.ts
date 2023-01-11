import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostCompletePhoneNumberAuthRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: Record<string, any>;
}


export class PostCompletePhoneNumberAuthResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
