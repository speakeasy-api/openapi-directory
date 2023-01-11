import { SpeakeasyBase } from "../../../internal/utils";
import { BeezUpCommonLovLink3 } from "./beezupcommonlovlink3";
import { BeezUpCommonParameterTypeEnum } from "./beezupcommonparametertypeenum";
export declare class BeezUpCommonLinkParameterProperty3 extends SpeakeasyBase {
    description?: string;
    label?: string;
    lovLink?: BeezUpCommonLovLink3;
    lovRequired?: boolean;
    required?: boolean;
    schema?: string;
    type?: BeezUpCommonParameterTypeEnum;
    value?: Record<string, any>;
}
