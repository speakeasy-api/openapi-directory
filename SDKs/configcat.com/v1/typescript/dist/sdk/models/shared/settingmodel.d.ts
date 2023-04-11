import { SpeakeasyBase } from "../../../internal/utils";
import { SettingTypeEnum } from "./settingtypeenum";
import { TagModel } from "./tagmodel";
/**
 * When the creation was successful.
 */
export declare class SettingModel extends SpeakeasyBase {
    configId?: string;
    configName?: string;
    hint?: string;
    key?: string;
    name?: string;
    order?: number;
    settingId?: number;
    settingType?: SettingTypeEnum;
    tags?: TagModel[];
}
