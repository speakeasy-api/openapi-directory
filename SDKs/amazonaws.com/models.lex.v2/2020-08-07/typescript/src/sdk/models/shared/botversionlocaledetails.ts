import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BotVersionLocaleDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sourceBotVersion" })
  sourceBotVersion?: string;
}
