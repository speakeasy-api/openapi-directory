import { SpeakeasyBase } from "../../../internal/utils";
import { ThirdPartyTypeEnum } from "./thirdpartytypeenum";
export declare class PublishTypeInput extends SpeakeasyBase {
    arn?: string;
    publicVersionNumber?: string;
    type?: ThirdPartyTypeEnum;
    typeName?: string;
}
