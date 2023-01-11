import { SpeakeasyBase } from "../../../internal/utils";
import { OptionsList } from "./optionslist";
/**
 * <p/>
**/
export declare class OptionGroupsList extends SpeakeasyBase {
    allowsVpcAndNonVpcInstanceMemberships?: boolean;
    engineName?: string;
    majorEngineVersion?: string;
    optionGroupArn?: string;
    optionGroupDescription?: string;
    optionGroupName?: string;
    options?: OptionsList[];
    vpcId?: string;
}
