/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { BaseModelNameEnum } from "./basemodelnameenum";
import { CLMLanguageCodeEnum } from "./clmlanguagecodeenum";
import { InputDataConfig } from "./inputdataconfig";
import { ModelStatusEnum } from "./modelstatusenum";
import { Expose, Type } from "class-transformer";

/**
 * Success
 */
export class CreateLanguageModelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "BaseModelName" })
  baseModelName?: BaseModelNameEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "InputDataConfig" })
  @Type(() => InputDataConfig)
  inputDataConfig?: InputDataConfig;

  @SpeakeasyMetadata()
  @Expose({ name: "LanguageCode" })
  languageCode?: CLMLanguageCodeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "ModelName" })
  modelName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "ModelStatus" })
  modelStatus?: ModelStatusEnum;
}
