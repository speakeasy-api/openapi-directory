import { SpeakeasyBase } from "../../../internal/utils";
import { RegistryTypeEnum } from "./registrytypeenum";
export declare class DeregisterTypeInput extends SpeakeasyBase {
    arn?: string;
    type?: RegistryTypeEnum;
    typeName?: string;
    versionId?: string;
}
