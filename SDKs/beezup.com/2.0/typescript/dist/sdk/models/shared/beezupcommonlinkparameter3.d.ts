import { SpeakeasyBase } from "../../../internal/utils";
import { BeezUpCommonParameterInEnum } from "./beezupcommonparameterinenum";
import { BeezUpCommonLovLink3 } from "./beezupcommonlovlink3";
import { BeezUpCommonLinkParameterProperty3 } from "./beezupcommonlinkparameterproperty3";
import { BeezUpCommonParameterTypeEnum } from "./beezupcommonparametertypeenum";
export declare class BeezUpCommonLinkParameter3 extends SpeakeasyBase {
    description?: string;
    in?: BeezUpCommonParameterInEnum;
    label?: string;
    lovLink?: BeezUpCommonLovLink3;
    lovRequired?: boolean;
    properties?: Record<string, BeezUpCommonLinkParameterProperty3>;
    required?: boolean;
    schema?: string;
    type?: BeezUpCommonParameterTypeEnum;
    value?: Record<string, any>;
}
