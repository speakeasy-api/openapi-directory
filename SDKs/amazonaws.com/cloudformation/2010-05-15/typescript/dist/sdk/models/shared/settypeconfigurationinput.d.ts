import { SpeakeasyBase } from "../../../internal/utils";
import { ThirdPartyTypeEnum } from "./thirdpartytypeenum";
export declare class SetTypeConfigurationInput extends SpeakeasyBase {
    configuration: string;
    configurationAlias?: string;
    type?: ThirdPartyTypeEnum;
    typeArn?: string;
    typeName?: string;
}
