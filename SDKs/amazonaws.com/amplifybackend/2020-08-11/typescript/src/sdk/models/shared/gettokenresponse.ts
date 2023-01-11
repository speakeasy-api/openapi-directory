import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetTokenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AppId" })
  appId?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=ChallengeCode" })
  challengeCode?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=SessionId" })
  sessionId?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=Ttl" })
  ttl?: Record<string, any>;
}
