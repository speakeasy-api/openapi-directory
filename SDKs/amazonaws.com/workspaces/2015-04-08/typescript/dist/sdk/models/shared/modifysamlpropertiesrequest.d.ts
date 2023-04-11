import { SpeakeasyBase } from "../../../internal/utils";
import { DeletableSamlPropertyEnum } from "./deletablesamlpropertyenum";
import { SamlProperties } from "./samlproperties";
export declare class ModifySamlPropertiesRequest extends SpeakeasyBase {
    propertiesToDelete?: DeletableSamlPropertyEnum[];
    resourceId: string;
    samlProperties?: SamlProperties;
}
