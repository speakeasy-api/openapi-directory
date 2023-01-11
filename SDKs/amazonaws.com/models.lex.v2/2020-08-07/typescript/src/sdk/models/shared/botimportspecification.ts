import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataPrivacy } from "./dataprivacy";



// BotImportSpecification
/** 
 * Provides the bot parameters required for importing a bot.
**/
export class BotImportSpecification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=botName" })
  botName: string;

  @SpeakeasyMetadata({ data: "json, name=botTags" })
  botTags?: Record<string, string>;

  @SpeakeasyMetadata({ data: "json, name=dataPrivacy" })
  dataPrivacy: DataPrivacy;

  @SpeakeasyMetadata({ data: "json, name=idleSessionTTLInSeconds" })
  idleSessionTTLInSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=roleArn" })
  roleArn: string;

  @SpeakeasyMetadata({ data: "json, name=testBotAliasTags" })
  testBotAliasTags?: Record<string, string>;
}
