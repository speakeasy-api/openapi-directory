import { SpeakeasyBase } from "../../../internal/utils";
import { OptionsList } from "./optionslist";
export declare class OptionGroup extends SpeakeasyBase {
    allowsVpcAndNonVpcInstanceMemberships?: boolean;
    engineName?: string;
    majorEngineVersion?: string;
    optionGroupDescription?: string;
    optionGroupName?: string;
    options?: OptionsList[];
    vpcId?: string;
}
