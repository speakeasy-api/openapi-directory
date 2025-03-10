/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ConfigurationOptionSetting } from "./configurationoptionsetting";

/**
 * A list of validation messages for a specified configuration template.
 */
export class ValidateConfigurationSettingsMessage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  applicationName: string;

  @SpeakeasyMetadata()
  environmentName?: string;

  @SpeakeasyMetadata({ elemType: ConfigurationOptionSetting })
  optionSettings: ConfigurationOptionSetting[];

  @SpeakeasyMetadata()
  templateName?: string;
}
