import { SpeakeasyBase } from "../../../internal/utils";
import { ThirdPartyTypeEnum } from "./thirdpartytypeenum";
export declare class TestTypeInput extends SpeakeasyBase {
    arn?: string;
    logDeliveryBucket?: string;
    type?: ThirdPartyTypeEnum;
    typeName?: string;
    versionId?: string;
}
