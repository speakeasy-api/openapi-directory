import { SpeakeasyBase } from "../../../internal/utils";
import { ParameterTierEnum } from "./parametertierenum";
import { ParameterTypeEnum } from "./parametertypeenum";
import { Tag } from "./tag";
export declare class PutParameterRequest extends SpeakeasyBase {
    allowedPattern?: string;
    dataType?: string;
    description?: string;
    keyId?: string;
    name: string;
    overwrite?: boolean;
    policies?: string;
    tags?: Tag[];
    tier?: ParameterTierEnum;
    type?: ParameterTypeEnum;
    value: string;
}
