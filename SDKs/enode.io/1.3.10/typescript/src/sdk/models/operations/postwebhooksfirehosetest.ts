import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostWebhooksFirehoseTestSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  clientAccessToken: shared.SchemeClientAccessToken;
}


export class PostWebhooksFirehoseTestRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: PostWebhooksFirehoseTestSecurity;
}


export class PostWebhooksFirehoseTestResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  postWebhooksFirehoseTestDefaultApplicationJSONString?: string;
}
