/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class GetSettingsRequest extends SpeakeasyBase {
  /**
   * The identifier of the Config.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=configId",
  })
  configId: string;
}

export class GetSettingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.SettingModelHaljson })
  settingModelHaljsons?: shared.SettingModelHaljson[];

  @SpeakeasyMetadata({ elemType: shared.SettingModel })
  settingModels?: shared.SettingModel[];

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
