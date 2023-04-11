import { SpeakeasyBase } from "../../../internal/utils";
import { BaseModelNameEnum } from "./basemodelnameenum";
import { CLMLanguageCodeEnum } from "./clmlanguagecodeenum";
import { InputDataConfig } from "./inputdataconfig";
import { ModelStatusEnum } from "./modelstatusenum";
/**
 * <p>Provides information about a custom language model, including:</p> <ul> <li> <p>The base model name</p> </li> <li> <p>When the model was created</p> </li> <li> <p>The location of the files used to train the model</p> </li> <li> <p>When the model was last modified</p> </li> <li> <p>The name you chose for the model</p> </li> <li> <p>The model's language</p> </li> <li> <p>The model's processing state</p> </li> <li> <p>Any available upgrades for the base model</p> </li> </ul>
 */
export declare class LanguageModel extends SpeakeasyBase {
    baseModelName?: BaseModelNameEnum;
    createTime?: Date;
    failureReason?: string;
    inputDataConfig?: InputDataConfig;
    languageCode?: CLMLanguageCodeEnum;
    lastModifiedTime?: Date;
    modelName?: string;
    modelStatus?: ModelStatusEnum;
    upgradeAvailability?: boolean;
}
