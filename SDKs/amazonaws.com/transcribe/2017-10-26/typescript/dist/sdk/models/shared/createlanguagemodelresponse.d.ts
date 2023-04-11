import { SpeakeasyBase } from "../../../internal/utils";
import { BaseModelNameEnum } from "./basemodelnameenum";
import { CLMLanguageCodeEnum } from "./clmlanguagecodeenum";
import { InputDataConfig } from "./inputdataconfig";
import { ModelStatusEnum } from "./modelstatusenum";
/**
 * Success
 */
export declare class CreateLanguageModelResponse extends SpeakeasyBase {
    baseModelName?: BaseModelNameEnum;
    inputDataConfig?: InputDataConfig;
    languageCode?: CLMLanguageCodeEnum;
    modelName?: string;
    modelStatus?: ModelStatusEnum;
}
