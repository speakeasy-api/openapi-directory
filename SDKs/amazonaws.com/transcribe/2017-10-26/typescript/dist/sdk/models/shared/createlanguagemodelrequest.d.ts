import { SpeakeasyBase } from "../../../internal/utils";
import { BaseModelNameEnum } from "./basemodelnameenum";
import { CLMLanguageCodeEnum } from "./clmlanguagecodeenum";
import { InputDataConfig } from "./inputdataconfig";
import { Tag } from "./tag";
export declare class CreateLanguageModelRequest extends SpeakeasyBase {
    baseModelName: BaseModelNameEnum;
    inputDataConfig: InputDataConfig;
    languageCode: CLMLanguageCodeEnum;
    modelName: string;
    tags?: Tag[];
}
