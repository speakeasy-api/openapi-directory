/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { DataPrivacy } from "./dataprivacy";
import { Expose, Type } from "class-transformer";

/**
 * Provides the bot parameters required for importing a bot.
 */
export class BotImportSpecification extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "botName" })
  botName: string;

  @SpeakeasyMetadata()
  @Expose({ name: "botTags" })
  botTags?: Record<string, string>;

  /**
   * By default, data stored by Amazon Lex is encrypted. The <code>DataPrivacy</code> structure provides settings that determine how Amazon Lex handles special cases of securing the data for your bot.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "dataPrivacy" })
  @Type(() => DataPrivacy)
  dataPrivacy: DataPrivacy;

  @SpeakeasyMetadata()
  @Expose({ name: "idleSessionTTLInSeconds" })
  idleSessionTTLInSeconds?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "roleArn" })
  roleArn: string;

  @SpeakeasyMetadata()
  @Expose({ name: "testBotAliasTags" })
  testBotAliasTags?: Record<string, string>;
}
