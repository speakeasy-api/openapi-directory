import { SpeakeasyBase } from "../../../internal/utils";
import { RegistryTypeEnum } from "./registrytypeenum";
export declare class DescribeTypeInput extends SpeakeasyBase {
    arn?: string;
    publicVersionNumber?: string;
    publisherId?: string;
    type?: RegistryTypeEnum;
    typeName?: string;
    versionId?: string;
}
